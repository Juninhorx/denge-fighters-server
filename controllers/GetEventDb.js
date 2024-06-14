import Event from '../models/Event.js';
import User from '../models/User.js';
import sequelize from "../db.js";

const GetEventsDb = async (req, res) => {
    try {
        await sequelize.sync();
        const events = await Event.findAll({
            include: {
                model: User,
                attributes: ['completeName'],
                as: 'creator'
            }
        });
        res.json(events);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao buscar eventos' });
    }
};

export default GetEventsDb;