import React, {useEffect, useReducer} from 'react';
import {Route, Routes} from 'react-router-dom';
import '../../css/index.scss';
import AppHeader from './AppHeader';
import NotFound from './NotFount';
import About from './About';
import {getBooksData} from '../requests';
import {
  booksSet,
  titleSet,
  fetchError,
  fetchLoading,
  fetchSuccessful,
  initializer,
  reducer
} from '../reducers/BookReducer';
import BookList from './BookList';
import Book from './Book';

export default function App() {
  const [books, dispatch] = useReducer(reducer, initializer());

  const findBookById = (id) => (books.data.find((x) => x.id === id));

  /* Request API implementation */
  const fetchBooksData = () => {
    // dispatch(fetchStateSet(widget.id, true)); Loading
    dispatch(fetchLoading());

    getBooksData()
      .then(({data}) => {
        dispatch(booksSet(data));
        dispatch(fetchSuccessful());
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  return (
    <div className="app">
      <AppHeader/>
      <Routes>
        <Route path="/" element={<BookList books={books} refresh_books={fetchBooksData}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book/:id" element={<Book findBookById={findBookById} titleSet={titleSet} dispatch={dispatch}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
