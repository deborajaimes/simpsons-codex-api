const express = require("express")
const cors = require("cors")

const api = express() // Cria a API com Express
api.use(express.json()) // Habilita o corpo das requisições em JSON
api.use(cors({ // Habilita o CORS (Cross Origin Resource Sharing)
    origin: "*"
}))

const personagens = [
    {
        nome: "Homer Simpson",
        imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/cropped-homersimpson-6807529.jpg"
    },
    {
        nome: "Lisa Simpson",
        imagem: "https://vandal-us.s3.amazonaws.com/spree/products/60da2799feb0460953f69e9a/original/uploads_2F1624909460969-oatkpzgvczb-5e144e9c29f02ff3bc7f4160ed002f02_2FEstampa%2BLisa%2BSimpson.jpg"
    }
]

api.get("/", (req, res) => { 
    res.json({ mensagem: "Olá mundo" })
})

api.get("/personagens", (req, res) => {
    res.json(personagens)
})

api.post("/personagens", (req, res) => {
    personagens.push(req.body)
    res.json({ mensagem: "Personagem salvo com sucesso!" })
})

api.listen(3001, () => {
    console.log("API rodando na porta 3000")
})