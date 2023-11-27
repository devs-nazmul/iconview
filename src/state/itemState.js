
import { create } from 'zustand'

export const useItem = create((set) => ({
	item: "basic",
	setItem: (value) => set((state) => ({ item: value }))
}))