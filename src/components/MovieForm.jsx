import { useParams } from "react-router-dom";

const MovieForm = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary">Save</button>
    </div>
  );
};

export default MovieForm;
