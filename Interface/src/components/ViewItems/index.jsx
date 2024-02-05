import React, { useEffect, useState } from "react";
import ItemCard from "components/ItemCard";
import { Items } from "./style";

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/items");
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error("Erro ao buscar itens.");
        }
      } catch (error) {
        console.error("Erro ao conectar com o backend:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <Items>
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </Items>
    </>
  );
};

export default ViewItems;
