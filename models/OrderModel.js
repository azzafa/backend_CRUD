import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Order = db.define(
  'order',
  {
    fullName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.TEXT,
    },
    no_hp: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Order;
