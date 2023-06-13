import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src={"./images/slider_1.jpg"}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link" >
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src={"./images/slider_2.webp"}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src={"./images/slider_3.avif"}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={"./images/slider_4.avif"}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src={"./images/slider_4.avif"}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src={"./images/slider_4.avif"}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;