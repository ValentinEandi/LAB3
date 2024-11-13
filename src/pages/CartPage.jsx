import React from 'react'; 
import { Link } from 'react-router-dom'; // Para la navegación
import { useCart } from '../context/CartContext'; // Para manejar el carrito
// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";



function CartPage() {
  const { cartItems, removeFromCart, getTotal } = useCart(); // Obtenemos el carrito y funciones de contexto

  return (
    <div className="cart-container">
      <header className="header">
        <h1 className="logo">Tienda de Zapatillas</h1>
        <nav className="nav">
          
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHouse} /> Inicio
          </Link>
          
          <Link to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser}/> Iniciar sesión
            </Link>

          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faCartShopping} /> Carrito ({cartItems.length})
          </Link>
          
        </nav>
      </header>
      
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
