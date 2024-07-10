import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Histori = db.define(
  'histori',
  {
    id_order: {
      type: DataTypes.TEXT,
    },
    nama_order: {
      type: DataTypes.STRING,
    },
    alamat_order: {
      type: DataTypes.STRING,
    },
    barang_order: {
      type: DataTypes.STRING,
    },
    hp_order: {
      type: DataTypes.STRING,
    },
    ongkir: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Histori;
