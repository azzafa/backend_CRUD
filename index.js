import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index.js';
import Users from './models/UserModels.js';
import Histori from './models/HistoriModel.js';
import db from './config/Database.js';
import Kategori from './models/KategoriModel.js';
import Ongkir from './models/OngkirModel.js';
import Order from './models/OrderModel.js';
import Donasi from './models/DonasiModel.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database Connected..');
  await Users.sync();
  await Histori.sync();
  await Donasi.sync();
  await Kategori.sync();
  await Ongkir.sync();
  await Order.sync();
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));
