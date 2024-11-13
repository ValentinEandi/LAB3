import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/cart.css'; // Ajusta la ruta si el archivo está en otra carpeta


function CartPage() {
  const { cartItems, removeFromCart, getTotal } = useCart(); // Obtenemos el carrito y funciones de contexto

  return (
    <div className="cart-container">
      <h1>StreetKicks</h1>
      
      {cartItems.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.price.toLocaleString()}</p>
                <p>Total: ${(item.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ${getTotal().toLocaleString()}</h3>
      <button>Proceder con la compra</button>
    </div>
  );
}

export default CartPage;
