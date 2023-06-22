import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";

const Product = () => {
  const {id} = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(process.env.REACT_APP_API_URL + `/products/${id}?populate=*`, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
          }
        })
        console.log("res",res)
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [id])

  console.log("data",data)
  console.log("id",id)


  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;