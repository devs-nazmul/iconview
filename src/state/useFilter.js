
import { create } from 'zustand'

export const useFilter = create((set) => ({
	filter: {
		type: "",
		size: "",
		color: "#0E1736",
		vendor: "Font Awesome",
		search: "",
		page: 0
	},
	setFilter: (newFilter) => set((state) => ({
		filter: {
			...state.filter, ...newFilter
		}
	}))
}))