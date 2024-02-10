import React, { useState } from "react";
import { Card } from "./style";

const ItemCard = ({ item, onItemDelete, onAddToCart }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    const response = await fetch(
      `https://jkfest.onrender.com/excluir-item/${item._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setIsDeleted(true);

      if (onItemDelete) {
        onItemDelete(item._id);
      }
    } else {
      console.error("Erro ao excluir o item no servidor.");
    }
  };

  const handleAddToCart = () => {
    if (item._id) {
      console.log("Chamando handleAddToCart");
      onAddToCart(item);
    } else {
      console.error("Item não tem uma propriedade 'id' definida.");
    }
  };

  return (
    <>
      {!isDeleted && (
        <Card>
          <div className="item-container">
            <div className="close" onClick={handleDelete}>
              <i className="fab fa-x"></i>
            </div>
            <div className="image-container">
              {item.imageLink && (
                <img src={item.imageLink} alt={`Imagem de ${item.name}`} />
              )}
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <p>Categoria: {item.category}</p>
              <hr className="card-divider"></hr>
              <div className="item-price">
                <sup>R$</sup>
                <h4> {item.price}</h4>
              </div>
            </div>
            <button className="item-cart-btn" onClick={handleAddToCart}>
              Add Ao Carrinho
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default ItemCard;
