import Card from "../Card/Card";
import "./list.scss";

const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1599725728689-f5c3cbb086ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1615093826418-b7d67b17b505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "First1",
    isNew: true,
    oldPrice: 1000,
    price: 70
  },
]

const loading = false;

const List = ({ subCats, maxPrice, sort, catId }) => {

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item,i) => (<Card item={item} key={i} />))}
    </div>
  );
};

export default List;