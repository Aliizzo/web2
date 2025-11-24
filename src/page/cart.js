import React from 'react';
import { useCart } from '../context/cartcontext';

export default function Cart() {
  const { cartItems, getTotal } = useCart();

  return (
    <div className="container">
      <h1 className="page-title">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p style={{textAlign:'center'}}>Your cart is currently empty.</p>
      ) : (
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <table className="cart-table">
              <thead>
                  <tr style={{background:'#eee'}}>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                  </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                    <tr key={index}>
                        <td style={{display:'flex', alignItems:'center', gap:'10px'}}>
                            <img src={item.image} alt={item.name} style={{width:'50px', height:'50px', borderRadius:'50%', objectFit:'cover'}}/>
                            {item.name}
                        </td>
                        <td>${item.price}</td>
                        <td>{item.qty}</td>
                        <td>${(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                ))}
              </tbody>
          </table>
          <div style={{textAlign: 'right', marginTop: '20px'}}>
            <h2>Total: ${getTotal()}</h2>
            <button className="hero-btn" style={{borderRadius:'5px'}}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}