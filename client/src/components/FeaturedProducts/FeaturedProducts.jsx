import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      img: "./images/slider_4.avif",
      img2: "./images/slider_3.avif",
      title: "First",
      isNew: true,
      oldPrice: 100,
      price: 70
    },
    {
      id: 2,
      img: "./images/slider_2.webp",
      img2: "./images/slider_1.jpg",
      title: "Second",
      isNew: false,
      oldPrice: 200,
      price: 160
    },
    {
      id: 3,
      img: "./images/slider_2.webp",
      img2: "./images/slider_1.jpg",
      title: "Second",
      isNew: false,
      oldPrice: 200,
      price: 160
    },
    {
      id: 4,
      img: "./images/slider_2.webp",
      img2: "./images/slider_1.jpg",
      title: "Second",
      isNew: false,
      oldPrice: 200,
      price: 160
    }
  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem odio illo, fugiat alias saepe iure delectus at repellendus architecto cum obcaecati, dignissimos natus, harum minima animi officia inventore numquam!
        </p>
      </div>
      <div className="bottom">
        {data?.map((item,i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;