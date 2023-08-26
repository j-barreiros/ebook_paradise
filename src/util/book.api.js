import { apiKey } from "../apikey"

export const SEARCH_TYPES = {
    GENERAL: "GENERAL",
    BY_TITLE: "BY_TITLE",
    BY_AUTHOR: "BY_AUTHOR",
    BY_ISBN: "BY_ISBN",
}

const maxResults = 20;

const searchEndpoints = (searchType, searchQuery, startIndex) => {

    const generalEndpoint = (filter, searchQuery) => `https://www.googleapis.com/books/v1/volumes?q=${filter}${searchQuery}&filter=paid-ebooks&maxResults=20&startIndex=${startIndex}`

    switch (searchType) {
        case SEARCH_TYPES.GENERAL:
            return generalEndpoint("", searchQuery);
        case SEARCH_TYPES.BY_TITLE:
            return generalEndpoint("intitle:", searchQuery);
        case SEARCH_TYPES.BY_AUTHOR:
            return generalEndpoint("inauthor:", searchQuery);
        case SEARCH_TYPES.BY_ISBN:
            return generalEndpoint("isbn:", searchQuery);
    }
}


export const handlePageNumber = (pageNumber) => {
    return pageNumber = pageNumber == 1 ? 0 : pageNumber * ( maxResults - 1 );
} 

export const makeSearch = async (searchQuery, searchType, pageNumber = 1) => {
    var result = await fetch(searchEndpoints(searchType, searchQuery, handlePageNumber(pageNumber)))
        .then(res => res.json())
        .then(data => data)

        console.log(result)
    
    /* Nothing found */
    if (result.totalItems == 0) return {
        totalItems : 0,
        pages: 0,
        items: [],
    };

    var formatedItems = result.items.map(book => {
        const info = book.volumeInfo;
        return {
            title: info.title,
            authors: info.authors ? info.authors : [""],
            categories: info.categories,
            description: info.description,
            imageUrl: info.imageLinks ? info.imageLinks : "",
            language: info.language ? info.language : "",
            pageCount: info.pageCount,
            publishingDate: info.publishingDate,
            publisher: info.publisher,
            price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0.0,
        }
    })
    return {
        totalItems: result.totalItems,
        pages: Math.ceil(result.totalItems / 20),
        items: formatedItems
    };
}

export const searchBooksByTitle = async (search) => {
    console.log(search)
    var result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=paid-ebooks&maxResults=20`)
        .then(res => res.json())
        .then(data => data.items)

    console.log(result)

    var formatedResult = result.map(book => {
        const info = book.volumeInfo
        return {
            title: info.title,
            authors: info.authors,
            categories: info.categories,
            description: info.description,
            imageUrl: info.imageLinks ? info.imageLinks : "",
            language: info.language,
            pageCount: info.pageCount,
            publishingDate: info.publishingDate,
            publisher: info.publisher,
            price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0.0,
        }
    })
    return formatedResult;
}