
import { create } from 'zustand'

export const useFilter = create((set) => ({
	filter: {
		type: { all: true, regular: false, solid: false, light: false, thin: false, colored: false },
		size: 15,
		color: "#5a5d67",
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