import { Link } from "react-router-dom";
import Like from "./Like";

function MoviesTable(props) {
  const { allMovies, onDelete, onLike, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")} style={{ cursor: "pointer" }}>
            Title
          </th>
          <th
            onClick={() => onSort("genre.name")}
            style={{ cursor: "pointer" }}
          >
            Genre
          </th>
          <th
            onClick={() => onSort("numberInStock")}
            style={{ cursor: "pointer" }}
          >
            Stock
          </th>
          <th
            onClick={() => onSort("dailyRentalrate")}
            style={{ cursor: "pointer" }}
          >
            Rate
          </th>
          <th>Like/Unlike</th>
        </tr>
      </thead>
      <tbody>
        {allMovies.map((movie) => (
          <tr key={movie._id}>
            <td><Link to={`/${movie._id}`} >{movie.title}</Link></td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <th>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
