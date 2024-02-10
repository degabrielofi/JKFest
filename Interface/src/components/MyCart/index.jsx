import React, { useEffect, useState } from "react";
import { StyledMyCart, CartButton, Overlay } from "./style";

const MyCart = ({
  cartItems,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [includeLabor, setIncludeLabor] = useState(true);
  const [totalWithLabor, setTotalWithLabor] = useState(0);

  const calculateTotalWithLabor = () => {
    const subtotal = calculateTotal();
    const laborCost = includeLabor ? 0.4 * subtotal : 0;
    return subtotal + laborCost;
  };
  useEffect(() => {
    setTotalWithLabor(calculateTotalWithLabor());
  }, [cartItems, includeLabor]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleIncludeLabor = () => {
    setIncludeLabor(!includeLabor);
  };

  return (
    <>
      <CartButton onClick={toggleCart}>
        <div className="icon">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </CartButton>
      {cartOpen && <Overlay onClick={toggleCart} />}
      <StyledMyCart open={cartOpen}>
        <div className="title">
          <h2>Meu Carrinho</h2>
          <button onClick={toggleCart} className="close">
            <i className="fas fa-x"></i>
          </button>
        </div>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem._id}>
              {cartItem.name} - Quantidade: {cartItem.quantity}{" "}
              <button onClick={() => onIncreaseQuantity(cartItem._id)}>
                +
              </button>
              <button onClick={() => onDecreaseQuantity(cartItem._id)}>
                -
              </button>
              <button onClick={() => onRemoveFromCart(cartItem._id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <label>
          Incluir Mão de Obra (40%):
          <input
            type="checkbox"
            checked={includeLabor}
            onChange={toggleIncludeLabor}
          />
        </label>
        <p>
          Valor Total: R$ <span>{calculateTotalWithLabor().toFixed(2)}</span>
        </p>
      </StyledMyCart>
    </>
  );
};

export default MyCart;
