export const SET_BOOKS = 'SET_BOOKS';
export const booksSet = (data) => ({
  type: SET_BOOKS,
  payload: {data}
});

export const SET_TITLE = 'SET_TITLE';
export const titleSet = (id, title) => ({
  type: SET_TITLE,
  payload: {id, title}
});

export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const fetchSuccessful = () => ({
  type: FETCH_SUCCESSFUL,
  payload: {
    loading: false,
    error: ''
  }
});

export const FETCH_LOADING = 'FETCH_LOADING';
export const fetchLoading = () => ({
  type: FETCH_LOADING,
  payload: {
    loading: true,
    error: ''
  }
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: {
    loading: false,
    error
  }
});

export const initializer = () => ({
  data: [],
  request: {
    loading: false,
    error: '',
  },
});

const setBooks = (state, {data}) => ({
  ...state,
  data
});

const setBookTitle = (state, {id, title}) => ({
  ...state,
  data: state.data.map((x) => (x.id === id ? {...x, title: title} : x)),
});

const setFetchState = (state, {loading, error}) => ({
  ...state,
  request: {
    loading,
    error
  }
});

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return setBooks(state, action.payload);
    case SET_TITLE:
      return setBookTitle(state, action.payload);
    case FETCH_SUCCESSFUL:
      return setFetchState(state, action.payload);
    case FETCH_LOADING:
      return setFetchState(state, action.payload);
    case FETCH_ERROR:
      return setFetchState(state, action.payload);
    default:
      return state;
  }
};
