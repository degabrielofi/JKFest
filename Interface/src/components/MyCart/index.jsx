import React, { useState } from "react";
import { StyledMyCart } from "./style";

const MyCart = ({ portfolioItems }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(portfolioItems);

  const addToCart = (item) => {
    // Verifica se o item já está no carrinho
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Se já existe, atualiza a quantidade
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Se não existe, adiciona o item ao carrinho
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    // Remove o item do carrinho
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const calculateTotal = () => {
    // Calcula o valor total do carrinho
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };

  return (
    <StyledMyCart>
      <h2>Meu Carrinho</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - Quantidade: {cartItem.quantity}{" "}
            <button onClick={() => removeFromCart(cartItem.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Valor Total: ${calculateTotal().toFixed(2)}</p>

      <h2>Adicionar ao Carrinho</h2>
      <ul>
        {portfolioItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => addToCart(item)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </StyledMyCart>
  );
};

export default MyCart;
