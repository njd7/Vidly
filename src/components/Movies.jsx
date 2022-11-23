import { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import Paginate from "./utils/Paginate";
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
// import Filter from "./utils/Filter";
// import Pagination from "./common/Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const allGenres = { _id: 0, name: "All genre" };

  const [selectedGenre, setSelectedGenre] = useState(allGenres);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const handleSort = (path) => {
    if (sortColumn.path === path) {
      setSortColumn({
        path,
        order: sortColumn.order === "asc" ? "desc" : "asc",
      });
    } else {
      setSortColumn({ path, order: "asc" });
    }
  };

  useEffect(() => {
    //another type of hook
    setMovies(getMovies);
    setGenres([allGenres, ...getGenres()]);
  }, []);
  // const filtered = Filter(movies, selectedGenre) || movies;

  const allMovies = Paginate(sorted, currentPage, pageSize);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    setMovies(
      movies.map((m) => {
        return m;
      })
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const { length: count } = movies; //
  // const count=movies.length;
  if (count === 0) return <p>There are no movies in the database</p>;
  return (
    <>
    
      <div className="row">
        <div className="col-3">
          {/* <br />
          <br /> */}
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {allMovies.length} movies in the database</p>
          <MoviesTable
            allMovies={allMovies}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default Movies;
