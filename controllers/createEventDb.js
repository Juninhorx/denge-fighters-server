import Event from "../models/Event.js"
import database from "../db.js"

const CreateEventDb = async (req, res) => {
  const data = req.body
  await database.sync()
  try {
    await database.sync()
    const newEvent = await Event.create(data)
    res.status(201).send('Evento cadastrado com sucesso!')
    console.log(newEvent)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default CreateEventDb