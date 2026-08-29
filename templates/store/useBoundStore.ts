import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { useState, useEffect } from 'react';

// ============================================================================
// 1. Interfaces (Flat Interfaces - Tipado Estricto)
// ============================================================================

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartSlice {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

interface UISlice {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

// ============================================================================
// 2. Tipo Global (Fusión de Slices)
// ============================================================================

type Store = CartSlice & UISlice;

// ============================================================================
// 3. Creación del Store (Middlewares: Immer + Persist + DevTools)
// ============================================================================

export const useBoundStore = create<Store>()(
    devtools(
        persist(
            immer((set) => ({
                // --- Cart Slice ---
                items: [],
                addItem: (item) =>
                    set((state) => {
                        const existing = state.items.find((i) => i.id === item.id);
                        if (existing) {
                            existing.quantity += item.quantity;
                        } else {
                            state.items.push(item);
                        }
                    }),
                removeItem: (id) =>
                    set((state) => {
                        state.items = state.items.filter((i) => i.id !== id);
                    }),
                clearCart: () =>
                    set((state) => {
                        state.items = [];
                    }),

                // --- UI Slice ---
                isSidebarOpen: false,
                toggleSidebar: () =>
                    set((state) => {
                        state.isSidebarOpen = !state.isSidebarOpen;
                    }),
            })),
            {
                name: 'ecommerce-storage', // Clave nativa en localStorage
                // OPTIMIZACIÓN: Persistir solo el carrito, la UI se reinicia en cada visita
                partialize: (state) => ({ items: state.items }),
            },
        ),
        { name: 'AppStore' }, // Etiqueta para Redux DevTools
    ),
);

// ============================================================================
// 4. Hook de Hidratación Segura (Next.js 15 SSR)
// ============================================================================
// Uso: const items = useHydratedStore(useBoundStore, (state) => state.items);

export function useHydratedStore<T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    selector: (state: T) => F,
): F | undefined {
    const result = store(selector) as F;
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return isHydrated ? result : undefined;
}
