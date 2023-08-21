import { useEffect, useState } from "react";
import BookList from "../../components/book-list/book-list.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { searchBooksByTitle } from "../../util/book.api";

const SearchPage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const updateBooks = async () => {
            setBooks(await searchBooksByTitle(searchQuery))
        }
        if (searchQuery) {
            updateBooks();
        }
    }, [searchQuery])

    return (
        <>
            <SearchBar setSearchQuery={setSearchQuery} />
            <BookList books={books} />
        </>
    )
}

export default SearchPage;