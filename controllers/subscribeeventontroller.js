import UserEvent from "../models/UserEvent.js"
import sequelize from "../db.js"

const SubscribeEventUserDb = async (req, res) => {
  const data = req.body
  try {
    await sequelize.sync()
    const newSubscribe = await UserEvent.create(data)
    res.status(201).send('Inscrito com sucesso!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default SubscribeEventUserDb