const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer"); // Adicione o multer
const cloudinary = require("cloudinary").v2;

const app = express();
const port = 3001;

// Habilita o CORS
app.use(cors());

// Middleware para analisar dados JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do Cloudinary
cloudinary.config({
  cloud_name: "dby8ziuhi",
  api_key: "426879918615674",
  api_secret: "nuSoRNnhGrM7l-iTQ1bPwCtKPgs",
});

mongoose.connect(
  "mongodb+srv://degabrielofi:Marley2435@cluster0.lx4u6qq.mongodb.net/JKFest?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.on(
  "error",
  console.error.bind(console, "Erro de conexão ao MongoDB:")
);
connection.once("open", () => {
  console.log("Conectado ao MongoDB Atlas!");
});

// Definir um modelo para os itens
const Item = mongoose.model("Item", {
  name: String,
  price: Number,
  category: String,
  imageLink: String,
});

// Configuração do multer para processar uploads de arquivos
const upload = multer({ dest: "uploads/" }); // Onde os arquivos temporários serão armazenados

// Rota para cadastrar um novo item
app.post("/cadastrar-item", upload.single("image"), async (req, res) => {
  try {
    let imageLink = null;

    // Se existe uma imagem, salva-a no Cloudinary e obtém o link
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "item_images",
      });
      imageLink = result.secure_url;
    }

    const newItem = new Item({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      imageLink: imageLink,
    });

    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno do servidor");
  }
});

// Rota para buscar todos os itens
app.get("/items", async (req, res) => {
  try {
    const itens = await Item.find();
    res.json(itens);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

const Category = mongoose.model("category", {
  name: String,
});

// Rota para obter todas as categorias
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("Categorias encontradas:", categories); // Adicione esta linha
    res.json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.delete("/excluir-item/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;

    // Certifique-se de substituir "Item" pelo nome real do seu modelo
    await Item.findByIdAndDelete(itemId);

    res.status(204).send(); // Responda com sucesso sem conteúdo
  } catch (error) {
    console.error("Erro ao excluir o item:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.listen(port, () => {
  console.log(`Servidor está executando em http://localhost:${port}`);
});
