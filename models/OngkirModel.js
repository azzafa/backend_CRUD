import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Ongkir = db.define(
  'ongkir',
  {
    id_order: {
      type: DataTypes.TEXT,
    },
    hrg_ongkir: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Ongkir;
