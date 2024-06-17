import UserEvent from "../models/UserEvent.js"
import sequelize from "../db.js"


const isSubscribed = async (idEvent, idUser) => {
  const userOnDb = await UserEvent.findOne({where: {
   eventId: idEvent,
   userId: idUser,
  }})
  return userOnDb
}


const SubscribeEventUserDb = async (req, res) => {
  const data = req.body;
  const userId = req.body.userId;
  const eventId = req.body.eventId;

  try {
    const subscribed = await isSubscribed(eventId, userId);
    if (subscribed) {
      return res.status(422).send('Usuário já inscrito!');
    }

    // Se o usuário não estiver inscrito, continue com a criação da inscrição.
    await sequelize.sync();
    const newSubscribe = await UserEvent.create(data);
    console.log('criando usuario');
    return res.status(201).send('Inscrito com sucesso!');
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};


export default SubscribeEventUserDb