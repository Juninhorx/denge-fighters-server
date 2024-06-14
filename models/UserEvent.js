import { DataTypes } from 'sequelize';

import database from '../db.js';
import User from './User.js';
import Event from './Event.js';

const UserEvent = database.define('UserEvent', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  eventId: {
    type: DataTypes.INTEGER,
    references: {
      model: Event,
      key: 'id',
    },
  },
});

export default UserEvent;