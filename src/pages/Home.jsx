// src/pages/Home.jsx
import React from 'react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const { addToCart, cartItems } = useCart();
  const { user, logout } = useAuth();

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
    {
      id: 4,
      name: 'Ojotas Adilette 22',
      description: 'Ojotas cómodas para hombre y mujer',
      price: 49999,
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/60b707ee13ab4065b678ef19ca471015_9366/ojotas-adilette-22.jpg',
    },
    {
      id: 5,
      name: 'Botines Copa Pure 2 Elite',
      description: 'Botines de fútbol para terreno blando',
      price: 349999,
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b479195a5294c688105d9a27831fbca_9366/botines-copa-pure-2-elite-tejidos-para-terreno-blando.jpg',
    },
    {
      id: 6,
      name: 'Zapatillas Grand Court Alpha',
      description: 'Zapatillas clásicas de tenis',
      price: 79999,
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff38044f10c94578a61da2377b02e702_9366/zapatillas-grand-court-alpha.jpg',
    },
  ];

  const handleLogout = () => {
    logout();  // Llama a la función de logout que debe estar en tu AuthContext
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Tienda de Zapatillas</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHouse} /> Inicio
          </Link>

          {user ? (
            <button onClick={handleLogout} className="nav-link">
              <FontAwesomeIcon icon={faUser} /> Cerrar sesión
            </button>
          ) : (
            <Link to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} /> Iniciar sesión
            </Link>
          )}

          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faCartShopping} /> Carrito ({cartItems.length})
          </Link>
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
