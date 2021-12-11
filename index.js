const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const api = express() // Cria a API com Express
api.use(express.json()) // Habilita o corpo das requisições em JSON
api.use(cors({ // Habilita o CORS (Cross Origin Resource Sharing)
    origin: "*"
}))

async function connect() {
    await mongoose.connect('mongodb+srv://sa:sbdpu2001@cluster0.owqzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('Banco de dados conectado com sucesso')
}

connect()

const personagemSchema = new mongoose.Schema({
    nome: String,
    imagem: String
})

const personagemModel = mongoose.model("Personagem", personagemSchema)



const PORT = process.env.PORT || 3001

api.get("/", (req, res) => {
    res.json({ mensagem: "Olá mundo" })
})

api.get("/personagens", async (req, res) => {
   const resultado = await personagemModel.find({}) //buscar todos
    res.json(resultado)
})

api.post("/personagens", async (req, res) => {
    const resultado = await personagemModel.create(req.body) //cadastrar personagem
    res.json({ mensagem: "Personagem salvo com sucesso!" })
})

api.listen(PORT, () => {
    console.log("API rodando na porta " + PORT)
})