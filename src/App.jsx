import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookItem from './components/book-item/book-item.component'
import BookList from './components/book-list/book-list.component'
import SearchBar from './components/search-bar/search-bar.component'

import { logApiKey, searchBooksByTitle } from './util/book.api'
import SearchPage from './routes/search-page/search-page.component'

function App() {
    return (
      <main> 
        <SearchPage />
      </main>
    )
  }

export default App
