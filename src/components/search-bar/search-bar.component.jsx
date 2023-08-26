import { useState } from 'react';
import { SEARCH_TYPES } from '../../util/book.api';

const SearchBar = (props) => {

    const {handleSearch} = props;

    const [currentSearch, setCurrentSearch] = useState("");
    const [currentType, setCurrentType] = useState(SEARCH_TYPES.GENERAL);

    const makeSearch = (event) => {
        event.preventDefault();
        if (currentSearch === "") return;
        handleSearch(currentSearch, currentType);
        setCurrentSearch("");
    }

    return (
        <form onSubmit={(event) => makeSearch(event)}>
            <input
                type="text"
                value={currentSearch}
                onChange={(event) => setCurrentSearch(event.target.value)}
            />
            <select onChange={(event) => setCurrentType(event.target.value)}>
                <option value={SEARCH_TYPES.GENERAL}>General</option>
                <option value={SEARCH_TYPES.BY_TITLE}>Title</option>
                <option value={SEARCH_TYPES.BY_AUTHOR}>Author</option>
                <option value={SEARCH_TYPES.BY_ISBN}>ISBN</option>
            </select>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;