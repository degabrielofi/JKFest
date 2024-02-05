import React, { useState, useEffect } from "react";
import {
  FormContainer,
  Content,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
  FileUpload,
  ErrorMessage,
  WavesAnimation,
} from "./style";
import Footer from "components/Footer";

const ItemRegistration = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [categories, setCategories] = useState([]);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [itemImage, setItemImage] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Erro ao carregar categorias.");
      }
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error);
    }
  };

  useEffect(() => {
    // Carregar categorias disponíveis do backend
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setIsNewCategory(value === "outra");
    setItemCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", itemName);
    formData.append("price", itemPrice);
    formData.append("image", itemImage);

    const categoryToUse = isNewCategory ? itemCategory : itemCategory.value;

    // Se a categoria for nova, adicione-a à lista de categorias
    if (isNewCategory) {
      setCategories((prevCategories) => [
        ...prevCategories,
        { name: categoryToUse },
      ]);
    }

    formData.append("category", categoryToUse);

    try {
      const response = await fetch("http://localhost:3001/cadastrar-item", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Item cadastrado com sucesso!");
        setFeedbackMessage("Item cadastrado com sucesso!");
        setItemName("");
        setItemPrice("");
        setItemCategory("");
        setItemImage(null);
        setIsNewCategory(false);
        // Atualizar as categorias após o cadastro bem-sucedido
        fetchCategories();
      } else {
        console.error("Erro ao cadastrar o item.");
        setFeedbackMessage("Erro ao cadastrar o item.");
      }
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error);
      setFeedbackMessage("Erro de conexão com o backend.");
    }
  };

  return (
    <>
      <FormContainer>
        <Content>
          <h1>Cadastro de Itens</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <h3>Nome do Item:</h3>
              <Input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <h3>Preço do Item:</h3>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <h3>Categoria do Item:</h3>
              <Select
                value={isNewCategory ? "outra" : itemCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
                <option value="outra">Escrever nova categoria</option>
              </Select>
            </FormGroup>
            {isNewCategory && (
              <FormGroup>
                <h3>Nova Categoria:</h3>
                <Input
                  type="text"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  required
                />
              </FormGroup>
            )}
            <FormGroup>
              <h3>Imagem do Item:</h3>
              <FileUpload
                type="file"
                accept="image/*"
                onChange={(e) => setItemImage(e.target.files[0])}
              />
            </FormGroup>
            <Button type="submit">Cadastrar Item</Button>
            {feedbackMessage && <ErrorMessage>{feedbackMessage}</ErrorMessage>}
          </form>
        </Content>
      </FormContainer>
      <WavesAnimation>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,500 L 0,125 C 27.98101934815908,105.93530291957723 55.96203869631816,86.87060583915446 96,78 C 136.03796130368184,69.12939416084554 188.13286456288643,70.45287956295937 226,71 C 263.8671354371136,71.54712043704063 287.50650305213605,71.31787590900811 321,98 C 354.49349694786395,124.68212409099189 397.8411232285695,178.27561680100825 439,168 C 480.1588767714305,157.72438319899175 519.1290040335862,83.57965688695889 551,66 C 582.8709959664138,48.42034311304111 607.6428606370861,87.4057556511562 649,121 C 690.3571393629139,154.5942443488438 748.2995534180694,182.79732050841636 784,183 C 819.7004465819306,183.20267949158364 833.1589256906362,155.40496231517838 868,124 C 902.8410743093638,92.59503768482162 959.0647438193853,57.582830230870044 1007,63 C 1054.9352561806147,68.41716976912996 1094.5820990318223,114.26371676134144 1125,122 C 1155.4179009681777,129.73628323865856 1176.6068600533258,99.36230272376415 1205,95 C 1233.3931399466742,90.63769727623585 1268.9904607548738,112.28707234360198 1320,128 C 1371.0095392451262,143.71292765639802 1437.431296927179,153.489407901828 1460,152 C 1482.568703072821,150.510592098172 1461.2843515364107,137.75529604908598 1440,125 L 1440,500 L 0,500 Z"
            stroke="none"
            stroke-width="0"
            fill="#d8096b"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 250)"
          ></path>
          <path
            d="M 0,500 L 0,291 C 44.89883426486493,296.033213347285 89.79766852972986,301.0664266945701 122,298 C 154.20233147027014,294.9335733054299 173.70816014594547,283.7675065690045 205,287 C 236.29183985405453,290.2324934309955 279.3696908864883,307.8635470294119 318,298 C 356.6303091135117,288.1364529705881 390.81307630810153,250.77830531334791 435,258 C 479.18692369189847,265.2216946866521 533.3780038811054,317.0232317171963 568,314 C 602.6219961188946,310.9767682828037 617.6749081674769,253.12876781786682 651,240 C 684.3250918325231,226.87123218213318 735.9223634489866,258.4616970113363 778,269 C 820.0776365510134,279.5383029886637 852.6356380365766,269.02444413678785 883,267 C 913.3643619634234,264.97555586321215 941.535084404707,271.44052644151213 978,289 C 1014.464915595293,306.55947355848787 1059.2240243445954,335.2134500971639 1100,337 C 1140.7759756554046,338.7865499028361 1177.5688182169126,313.7056731698324 1215,318 C 1252.4311817830874,322.2943268301676 1290.5007027877543,355.9638572235067 1335,338 C 1379.4992972122457,320.0361427764933 1430.4283706320703,250.43889793614093 1449,234 C 1467.5716293679297,217.56110206385907 1453.7858146839649,254.28055103192952 1440,291 L 1440,500 L 0,500 Z"
            stroke="none"
            stroke-width="0"
            fill="#d8096b"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 250)"
          ></path>
        </svg>
      </WavesAnimation>
      <Footer />
    </>
  );
};

export default ItemRegistration;
