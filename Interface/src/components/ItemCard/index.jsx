import React, { useState } from "react";
import { Card } from "./style";

const ItemCard = ({ item, onItemDelete, onAddToCart }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    // Aqui você deve enviar uma solicitação para o servidor para excluir o item
    // Certifique-se de substituir "http://localhost:3001" pelo URL real do seu servidor
    const response = await fetch(
      `https://jkfest-back-end.onrender.com/excluir-item/${item._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Atualize o estado para refletir a exclusão
      setIsDeleted(true);

      // Chame a função de callback para notificar o componente pai sobre a exclusão
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
