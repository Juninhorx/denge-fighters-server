import { DataTypes } from 'sequelize'

import database from '../db.js'
import User from './User.js'
const Event = database.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    creatorUser: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventLocation: DataTypes.STRING,
    eventDescription: DataTypes.STRING
  });
  Event.belongsTo(User, { foreignKey: 'creatorUser', as: 'creator' });

export default Event