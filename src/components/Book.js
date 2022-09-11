import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {id} = useParams();

  const [book, setBook] = useState(props.findBookById(parseInt(id)));
  const [title, setTitle] = useState(book.title);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitTitle = () => {
    props.dispatch(props.titleSet(id, title));
    setBook({
      ...book,
      title
    });
  };

  return (
    <div>
      <img src={book.img}/>
      <h2>{book.title}</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmitTitle();
      }}>
        <input type="text" value={title} onChange={handleTitleChange}/>
        <button>Submit</button>
      </form>
      <p>{book.description}</p>
    </div>
  );
};

Book.propTypes = {
  findBookById: PropTypes.func.isRequired,
  titleSet: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Book;
