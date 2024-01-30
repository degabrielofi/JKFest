import styled from "styled-components";

export const Container = styled.div`
  font-family: "Arial", sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  color: #333;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px;
  font-size: 16px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  border: 1px solid #ddd;
  padding: 12px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
`;

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-400px")};
  height: 100%;
  width: 400px;
  background-color: #f8f9fa;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  transition: right 0.3s ease-in-out;
`;
