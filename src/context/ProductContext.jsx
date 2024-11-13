import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
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
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
