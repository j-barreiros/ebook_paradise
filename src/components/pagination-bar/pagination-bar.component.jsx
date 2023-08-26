import { useEffect } from "react";

const PageButton = (pageNumber) => {
    return (
        <h1>{pageNumber}</h1>
    )
}

const PaginationBar = ({currentPage, pageTotal = 0, changePage}) => {

    return (
        <section>
            <button onClick={() => changePage(currentPage - 1)}>Voltar</button>
            <span>{`${currentPage} of ${pageTotal}`}</span>
            <button onClick={() => changePage(currentPage + 1)}>Proximo</button>
        </section>
    )
}

export default PaginationBar;