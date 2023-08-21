import { apiKey } from "../apikey"

const searchQuery = (search) => {
    return `https://www.googleapis.com/books/v1/volumes?q=${search}`
}

export const logApiKey = async (search) => {
    var result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(res => res.json())
    console.log(result)
}

export const searchBooksByTitle = async (search) => {
    console.log(search)
    var result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=paid-ebooks&`)
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