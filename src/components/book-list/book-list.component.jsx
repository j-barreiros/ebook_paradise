// Styles
import { StyledBookList } from "./book-list.styles"

// Components
import BookItem from "../book-item/book-item.component";
import { useEffect, useState } from "react";
import { searchBooksByTitle } from "../../util/book.api";

const BookList = ({books}) => {

    console.log(books)

    if (books) {
        return (
            <StyledBookList>
                {books.map((book, index) => (
                    <BookItem 
                        key={index}
                        imageUrl={book.imageUrl.smallThumbnail}
                        title={book.title}
                        author={book.authors}
                        price={book.price ? book.price : 0.0}
                    />
                ))}
            </StyledBookList>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default BookList;