import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Donasi = db.define(
  'donasi',
  {
    id_kategori: {
      type: DataTypes.TEXT,
    },
    nama_brg: {
      type: DataTypes.STRING,
    },
    kondisi: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.STRING,
    },
    gmr: {
      type: DataTypes.TEXT,
    },
    kategori: {
      type: DataTypes.TEXT,
    },
    alamat: {
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

export default Donasi;
