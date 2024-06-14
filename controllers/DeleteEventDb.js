import Event from "../models/Event.js"
import UserEvent from "../models/UserEvent.js"
import database from "../db.js"

const DeleteEventDb = async (req, res) => {
  const idEvent = req.params.id
  console.log(idEvent)
  try {
    await database.sync()

    const userEventDelete = await UserEvent.destroy({
      where: {
        eventId: idEvent,
      },
    })

    // const eventToDelete = await Event.destroy({where: {id: idEvent}})
    const eventToDelete = await Event.destroy({
      where: {
        id: idEvent,
      },
    });

    if (eventToDelete === 0) {
      res.status(404).send('Evento não encontrado');
    } else {
      res.status(200).send('Evento deletado com sucesso');
    }
  }catch(error) {
    console.log(error.message)
  }
  //   res.status(200).send('Evento deletado com sucesso!')
  //   console.log(eventToDelete)
  // } catch (error) {
  //   res.status(500).send(error.message)
  // }
}

export default DeleteEventDb