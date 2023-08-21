import { useState } from 'react';

const SearchBar = ({setSearchQuery}) => {

    const [currentSearch, setCurrentSearch] = useState("");

    const makeSearch = () => {
        setSearchQuery(currentSearch);
    }

    return (
        <section>
            <input
                type="text"
                value={currentSearch}
                onChange={(event) => setCurrentSearch(event.target.value)}
            />
            <button type="button" onClick={makeSearch}>Search</button>
        </section>
    )
}

export default SearchBar;