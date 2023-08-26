import { createContext } from "react"

const INITIAL_VALUE = {
    items: [],
    totalItems: 0,
    pages: Math.ceil(this[totalItems] / 20),
    makeSearch: () => { },
    clearSearch: () => { },
}

export const SearchContext = createContext(INITIAL_VALUE)

export const SearchProvider = () => {



    return (
        <SearchContext.Provider>

        </SearchContext.Provider>
    )
}