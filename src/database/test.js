const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: 'Thiago Mendes',
        avatar: 'https://avatars3.githubusercontent.com/u/37598914?s=460&u=5d771482b6d4c0f07cf640c5bf1b4a982fbfc0ee&v=4',
        whatsapp: '13 991182161',
        bio: 'Instrutor de Fisíca'

    }

    classValue = {
        subject: 2,
        cost: "2000"
        //o proffy id virá pelo banco de dados

    } 

    classScheduleValues = [
        //class id vira pelo banco de dados apos cadastrar a aula
        {
            weekday: 1,
            time_from: 790,
            time_to: 1220
    },
        {
            weekday: 0,
            time_from: 790,
            time_to: 1220
    }
    ]

    //await createProffy(db,{proffyValue,classValue,classScheduleValues})

    //consultar dados inseridos

    /*const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)*/

    //consultar dados e classes de um professor

    const selectedProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;

`)
    //console.log(selectedProffys)


    const selectClassessSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = "1"
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "1120"
      AND class_schedule.time_to > "520"
      
`)
    //console.log(selectClassessSchedules)


});
