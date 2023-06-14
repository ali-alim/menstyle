import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss"

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1599725728689-f5c3cbb086ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1615093826418-b7d67b17b505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "First1",
    desc: "desc1",
    isNew: true,
    oldPrice: 1000,
    price: 70,
    quantity: 1
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1615093826418-b7d67b17b505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1599725728689-f5c3cbb086ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "Second2",
    desc: "desc2",
    isNew: false,
    oldPrice: 2000,
    price: 170,
    quantity: 2
  },
]


const Cart = () => {
  return (
    <div className="cart">
    <h1>Products in your cart</h1>
    {products?.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0, 100)}</p>
          <div className="price">
            {item.quantity} x ${item.price}
          </div>
        </div>
        <DeleteOutlinedIcon className="delete" />
      </div>
    ))}
    <div className="total">
      <span>SUBTOTAL</span>
      <span>$777</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset"> Reset Cart</span>
  </div>
  )
}

export default Cart