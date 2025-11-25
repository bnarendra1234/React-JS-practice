import "./Categories.css";

function Categories(props) {
  return (
    <div className="categories">
      <img src={props.image} alt="" width="65" height="65" />
      <h4>{props.title}</h4>
    </div>
  );
}

export default Categories;