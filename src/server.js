const express = require('express')
const server = express()


const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//configuração do serevidor local
server
    //receber os dados do re.body
    .use(express.urlencoded({
        extended: true
    }))
    //configurar arquivos estaticos (html,css,scripts)
    .use(express.static("public"))

    //rotas das aplicações
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)

    .listen(5500)
