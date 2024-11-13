import React, { useState, useEffect } from 'react';
import { useProduct } from '../context/ProductContext';

function Modal({ product, closeModal }) {
  const { addProduct, updateProduct } = useProduct();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    oldPrice: '',
    discount: '',
    image: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        image: product.image,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product) {
      updateProduct({ ...product, ...formData });
    } else {
      addProduct({ ...formData, id: Date.now() }); // Usamos el timestamp como id único
    }
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product ? 'Editar Producto' : 'Agregar Producto'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="oldPrice"
            placeholder="Precio anterior"
            value={formData.oldPrice}
            onChange={handleChange}
          />
          <input
            type="text"
            name="discount"
            placeholder="Descuento"
            value={formData.discount}
            onChange={handleChange}
          />
          <input
            type="url"
            name="image"
            placeholder="URL de la imagen"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={closeModal}>Cerrar</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
