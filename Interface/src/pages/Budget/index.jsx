import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Button,
  Input,
  List,
  ListItem,
  ItemImage,
  CartSidebar,
  Menu,
} from "./style";
import Icon from "assets/icons/Icon.png";

const categories = ["Todos", "Mesas", "Balões"];

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [cart, setCart] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [isCartOpen, setCartOpen] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    // Adiciona alguns itens iniciais ao portfólio apenas durante a montagem inicial
    const initialPortfolio = [
      {
        id: 1,
        name: "Mesa Redonda",
        price: 50.0,
        category: "Mesas",
        image: "table.jpg",
      },
      {
        id: 2,
        name: "Balão Vermelho",
        price: 10.0,
        category: "Balões",
        image: "balloon.jpg",
      },
      // Adicione outros itens conforme necessário
    ];

    setPortfolio(initialPortfolio);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "yzgabrieel02@gmail.com" && password === "jkfest2024") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleLogout = () => {
    setCart([]);
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: cartItem.totalPrice + item.price,
              }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1, totalPrice: item.price }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleNewItemSubmit = (e) => {
    e.preventDefault();

    const price = parseFloat(newItemPrice);

    if (newItemName && !isNaN(price) && price > 0) {
      const newItem = {
        id: portfolio.length + 1,
        name: newItemName,
        price: price,
        category: selectedCategory,
        image: newItemImage,
      };
      setPortfolio([...portfolio, newItem]);
      setNewItemName("");
      setNewItemPrice("");
      setNewItemImage("");
    }
  };

  const removeItemFromPortfolio = (item) => {
    setPortfolio(
      portfolio.filter((portfolioItem) => portfolioItem.id !== item.id)
    );
  };

  const filteredPortfolio = portfolio.filter(
    (item) =>
      item.name.toLowerCase().includes(filterKeyword.toLowerCase()) ||
      item.category.toLowerCase().includes(filterKeyword.toLowerCase()) ||
      filterKeyword === "Todos"
  );

  const categoriesToShow = Array.from(
    new Set(filteredPortfolio.map((item) => item.category))
  );

  return (
    <>
      <Menu>
        <header>
          <img src={Icon} alt="Icon" className="icon" />
          <a href="/registro">Registro</a>
        </header>
      </Menu>
      <Container>
        {isLoggedIn ? (
          <div>
            <Heading>Bem-vindo ao sistema CRUD</Heading>
            <Button onClick={handleLogout}>Logout</Button>

            <h3>Seu Carrinho:</h3>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  {item.image && <ItemImage src={item.image} alt={item.name} />}
                  {item.name} - Quantidade: {item.quantity}, Preço Total: R${" "}
                  {item.totalPrice.toFixed(2)}
                  <div>
                    <Button onClick={() => addToCart(item)}>
                      Adicionar mais
                    </Button>
                    <Button onClick={() => removeFromCart(item)}>
                      Remover
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
            <Button onClick={() => setCartOpen(!isCartOpen)}>
              Abrir Carrinho
            </Button>
            <CartSidebar isOpen={isCartOpen}>
              <h3>Carrinho</h3>
              <List>
                {cart.map((item) => (
                  <ListItem key={item.id}>
                    {item.image && (
                      <ItemImage src={item.image} alt={item.name} />
                    )}
                    {item.name} - Quantidade: {item.quantity}, Preço Total: R${" "}
                    {item.totalPrice.toFixed(2)}
                  </ListItem>
                ))}
              </List>
              <p>
                Subtotal: R${" "}
                {cart
                  .reduce((total, item) => total + item.totalPrice, 0)
                  .toFixed(2)}
              </p>
            </CartSidebar>

            <h3>Portfólio:</h3>
            <div>
              <label>
                Filtrar por Nome ou Categoria:
                <Input
                  type="text"
                  value={filterKeyword}
                  onChange={(e) => setFilterKeyword(e.target.value)}
                />
              </label>
              <label>
                Filtrar por Categoria:
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <List>
              {filteredPortfolio.map((item) => (
                <ListItem key={item.id}>
                  {item.image && <ItemImage src={item.image} alt={item.name} />}
                  {item.name} - Preço: R$ {item.price.toFixed(2)}
                  <div>
                    <Button onClick={() => addToCart(item)}>
                      Adicionar ao Carrinho
                    </Button>
                    <Button onClick={() => removeItemFromPortfolio(item)}>
                      Remover do Portfólio
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>

            <h3>Adicionar Novo Item ao Portfólio:</h3>
            <form onSubmit={handleNewItemSubmit}>
              <label>
                Nome do Item:
                <Input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Preço do Item:
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                URL da Imagem (opcional):
                <Input
                  type="text"
                  value={newItemImage}
                  onChange={(e) => setNewItemImage(e.target.value)}
                />
              </label>
              <br />
              <label>
                Categoria do Item:
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <Button type="submit">Adicionar Item</Button>
            </form>
          </div>
        ) : (
          <div>
            <Heading>Login</Heading>
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Senha:
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <br />
              <Button type="submit">Entrar</Button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
