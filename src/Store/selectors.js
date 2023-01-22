export const selectCategory = (state) => state.movies.category;
export const selectCategories = (state) => {
  let movies = state.movies.movies;

  const groupByCategory = movies.reduce((group, movie) => {
    let { category } = movie;
    group[category] = group[category] ?? [];
    group[category].push(movie);
    return group;
  }, {});

  return Object.keys(groupByCategory);
};

export const selectCurrentPage = (state) => state.movies.page;

export const selectMovies = (state) => state.movies.moviesFiltered;

export const selectMoviesStatus = (state) => state.movies.status;

export const selectPageCount = (state) => state.movies.pageCount;

export const selectNumberByPage = (state) => state.movies.numberByPage;

