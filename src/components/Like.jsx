function Like(props) {
  return (
    <div
      onClick={props.onClick}
      style={{ color: props.liked ? "crimson" : "pink", cursor: "crosshair" }}
      className="fa fa-regular fa-heart"
    ></div>
  );
}

export default Like;
