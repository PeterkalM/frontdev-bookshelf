import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BookList = (props) => {
  const bookElements = props.books.data.map((book) => {
    return (
      <li key={book.id}>
        <Link to={`/book/${book.id}`}>Name: {book.title}</Link>
      </li>
    );
  });

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={() => props.refresh_books()}>Refresh List</button>
      {props.books.request.loading && <div>Loading...</div>}
      {props.books.request.error !== '' && <div>{props.books.request.error}</div>}
      {(!(props.books.request.loading) && props.books.request.error === '') && bookElements}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        img: PropTypes.string,
      })
    ).isRequired,
    request: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.string
    }).isRequired
  }),
  refresh_books: PropTypes.func.isRequired
};

export default BookList;
