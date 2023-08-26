import { useEffect, useState, ReactDOM } from "react";
import BookList from "../../components/book-list/book-list.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { SEARCH_TYPES, makeSearch } from "../../util/book.api";
import PaginationBar from "../../components/pagination-bar/pagination-bar.component";

// Styled
import StyledSearchPage from "./search-page.styles";

const SearchPage = () => {

    const [currentSearch, setCurrentSearch] = useState("");
    const [currentSearchType, setCurrentSearchType] = useState(SEARCH_TYPES.GENERAL);
    const [currentPage, setCurrentPage] = useState(1);
    const [books, setBooks] = useState(null);


    const handleSearch = async (searchQuery, searchType) => {
        setCurrentSearch(searchQuery);
        setCurrentSearchType(searchType);
        setBooks(await makeSearch(searchQuery, searchType, currentPage))
    }

    const changePage = async (newPage) => {
        if (newPage < 1) return;
        window.scrollTo(0,0)
        setCurrentPage(newPage)
        setBooks(await makeSearch(currentSearch, currentSearchType, newPage))
    }



    if (books) {
        return (
            <StyledSearchPage>
                <SearchBar handleSearch = {handleSearch} />
                <BookList books={books} />
                <PaginationBar
                    currentPage={currentPage}
                    pageTotal={books.pages}
                    changePage={changePage}
                />
            </StyledSearchPage>
        )
    } else {
        return (
            <div>
                <SearchBar handleSearch={handleSearch} />
            </div>
        )
    }
}

export default SearchPage;