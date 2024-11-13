import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import Modal from '../components/Modal'; // Asegúrate de que la ruta sea correcta
 // Componente para el modal de agregar/editar productos

function AdminPage() {
  const { products, deleteProduct } = useProduct();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleAddProduct = () => {
    setCurrentProduct(null); // Para agregar un nuevo producto
    setIsModalOpen(true);
  };

  return (
    <div className="admin-container">
      <h2>Administrar Productos</h2>
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toLocaleString()}</p>
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de agregar/editar producto */}
      {isModalOpen && <Modal product={currentProduct} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default AdminPage;
