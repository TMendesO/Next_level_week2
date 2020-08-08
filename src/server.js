//dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "11-97854655",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [790],
        time_to: [1220]
    },

    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "11-97854655",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [790],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sabado",
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')





//funcionalidades


function getSubjects(subjectsNumber) {
    const arrayPosition = +subjectsNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubjects(data.subject)

        //adicionar ao object proffys
        proffys.push(data)
        return res.redirect("/study")

    } else {
        return res.render("give-classes.html", {
            subjects,
            weekdays
        })

    }




}






//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//configuração do serevidor local
server
    //configurar arquivos estaticos (html,css,scripts)
    .use(express.static("public"))

    //rotas das aplicações
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)
