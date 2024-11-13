// src/pages/Home.jsx
import React from 'react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { addToCart, cartItems } = useCart();
  const { user } = useAuth();

  const shoes = [
    {
      id: 1,
      name: 'Air Jordan 1 Zoom Comfort 2',
      description: 'Zapatillas Jordan Unisex',
      price: 215999,
      oldPrice: 269999,
      discount: '20% de descuento',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/731496-800-800?width=800&height=800&aspect=true',
    },
    {
      id: 2,
      name: 'Nike Dunk High Retro Premium',
      description: 'Zapatillas de Moda para Hombre',
      price: 239999,
      oldPrice: 269999,
      discount: '10% de descuento',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/773830-800-800?width=800&height=800&aspect=true',
    },
    {
      id: 3,
      name: 'Nike Air Force 1 07',
      description: 'Zapatillas de Moda para Mujer',
      price: 209999,
      oldPrice: 269999,
      discount: '25% de descuento',
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/812141-1000-1000?v=638382458013470000&width=1000&height=1000&aspect=true',
    },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Tienda de Zapatillas</h1>
        <nav className="nav">
          <Link to="/cart" className="nav-link">Carrito ({cartItems.length})</Link>
          {user ? (
            <>
              <span className="nav-link">{user.email}</span>
              {user.role === "admin" && <Link to="/admin" className="nav-link">Panel Admin</Link>}
            </>
          ) : (
            <Link to="/login" className="nav-link">Iniciar sesión</Link>
          )}
        </nav>
      </header>

      <div className="shoes-list">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <div className="shoe-details">
              <h3 className="shoe-name">{shoe.name}</h3>
              <p className="shoe-description">{shoe.description}</p>
              <p className="shoe-price">${shoe.price.toLocaleString()}</p>
              {shoe.oldPrice && (
                <p className="shoe-old-price" style={{ textDecoration: 'line-through', color: '#888' }}>
                  ${shoe.oldPrice.toLocaleString()}
                </p>
              )}
              {shoe.discount && <p style={{ color: 'green' }}>{shoe.discount}</p>}
              <button onClick={() => addToCart(shoe)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
