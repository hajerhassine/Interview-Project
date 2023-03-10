
export const IDLE = 0;
export const LOADING = 1;
export const SUCCEDEED = 2;
export const FAILED = 3;
export const EMPTY = 4;


const initialState = {
  category: "",
  moviesFiltered: [],
  movies: [],
  page: 1,
  pageCount: null,
  numberByPage: "4",
  status: IDLE,
  error: null,
};


export { initialState };
