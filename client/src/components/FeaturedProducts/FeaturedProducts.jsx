import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
          }
        })
        setProducts(res.data.data)
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData();
  }, [type])

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem odio illo, fugiat alias saepe iure delectus at repellendus architecto cum obcaecati, dignissimos natus, harum minima animi officia inventore numquam!
        </p>
      </div>
      <div className="bottom">
        {error 
          ? "Something went wrong!"
          : loading
          ? "loading..."
          : products?.map((item,i) => <Card item={item} key={i} />) 
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;