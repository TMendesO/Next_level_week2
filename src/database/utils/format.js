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

//funcionalidades

function getSubject(subjectsNumber) {
    const arrayPosition = +subjectsNumber - 1
    return subjects[arrayPosition]
}


//converter horas em minutos
function convertHoursToMinutes(time) {
    const [hour, minute] = time.split(':')
    return Number((hour * 60) + minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
