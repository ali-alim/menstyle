import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./list.scss";


const List = ({ subCats, maxPrice, sort, catId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][categories][id]=${catId}`, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
          }
        })
        setData(res.data.data)
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData();
  }, [subCats, maxPrice, sort, catId])

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item,i) => (<Card item={item} key={i} />))}
    </div>
  );
};

export default List;