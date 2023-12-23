
import { create } from 'zustand'

export const useFilter = create((set) => ({
	filter: {
		type: { all: true, regular: false, solid: false, light: false, thin: false, colored: false },
		size: 15,
		color: "#0E1736",
		vendor: { alls: true, "fontawesome": false, "apple": false, google: false, bootstrap: false, tibian: false, freepik: false },
		search: "",
		page: 0
	},
	setFilter: (newFilter) => set((state) => ({
		filter: {
			...state.filter, ...newFilter
		}
	}))
}))