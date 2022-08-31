import express from "express";
import fs from 'fs';

import { buildRecords, carReducer, first, empates, last, filterItems } from "./helper.js";


const data = ((JSON.parse(await fs.readFileSync("car-list.json"))).sort((a, b) => b.models.length - a.models.length))

const app = express();



const path = "/marcas/";



app.use(express.json())

app.get("/", (req, res) => {
    const routes = app._router.stack.map(route => route.route).splice(4)
    const rotas = routes.map(get => `http://localhost:9090${get.path}`)
    res.json({ rotas, data })
})
app.get(`${path}maisModelos`, (req, res) => {
    const marcas = buildRecords(data)
    const resposta = first(marcas, 1)
    const brand = resposta[0].brand
    res.status(200).json(brand)
})

app.get(`${path}menosModelos`, (req, res) => {
    const marcas = buildRecords(data)
    const resposta = last(marcas, 1)
    const brand = resposta[0].brand
    res.status(200).json(brand)

})
app.get(`${path}listaMaisModelos/:qtd`, (req, res) => {
    const marcas = buildRecords(data)
    const qtd = req.params.qtd

    const resposta = first(marcas, qtd)
    const brand = resposta.map(quant => `${quant.brand} - ${quant.quantityModels}`)
    res.status(200).json(brand)

})
app.get(`${path}listaMenosModelos/:qtd`, (req, res) => {

    const marcas = buildRecords(data)
    const qtd = parseInt(req.params.qtd)
    const resposta = last(marcas, qtd).sort((a, b) => a.quantityModels - b.quantityModels)
    const brand = resposta.slice(0, -1).map(quant => `${quant.brand} - ${quant.quantityModels}`)

    res.status(200).json(brand)
})
app.post(`${path}listaModelos`, (req, res) => {
    const marcas = buildRecords(data)
    const { nomeMarca } = req.body
    try {
        const filter = filterItems(nomeMarca, marcas)
        res.status(200).json(filter.models)
    } catch {
        res.json([])
    }

})

app.listen(9090, () => {
    console.log("Api Started")
})
