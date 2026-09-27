import express from "express"

import { inserirResultado } from "./DAO/resultado/inserir_resultado.js"

const app = express()

app.use(express.json())


app.get("/", (req, res) => {

    res.json({
        mensagem: "API do Quiz funcionando!"
    })

})


app.post("/resultado", async (req, res) => {

    try {

        const {
            nome,
            email,
            idade,
            sexo,
            pontos,
            total_questoes,
            resultado
        } = req.body


        if (
            !nome ||
            !email ||
            !idade ||
            !sexo ||
            pontos === undefined ||
            !total_questoes ||
            !resultado
        ) {

            return res.status(400).json({
                erro: "Todos os campos são obrigatórios."
            })

        }


        const resposta = await inserirResultado({

            nome: nome,
            email: email,
            idade: idade,
            sexo: sexo,
            pontos: pontos,
            total_questoes: total_questoes,
            resultado: resultado

        })


        res.status(201).json({

            mensagem: "Resultado salvo com sucesso!",

            id: resposta.insertId

        })

    } catch (erro) {

        console.error(erro)

        res.status(500).json({

            erro: "Erro ao salvar resultado."

        })

    }

})


app.listen(3000, () => {

    console.log(
        "Servidor rodando em http://localhost:3000"
    )

})