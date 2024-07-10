import express from 'express';
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import {
  createKategori,
  getAllKategori,
  getKategoriById,
} from '../controllers/Kategori.js';
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOrderById,
  updateOrder,
} from '../controllers/Order.js';
import {
  createDonasi,
  deleteDonasi,
  getAllDonasi,
  getDonasiById,
  updateDonasi,
} from '../controllers/Donasi.js';
import {
  createHistori,
  deleteHistori,
  getAllHistori,
  getHistoriById,
  updateHistori,
} from '../controllers/Histori.js';

const router = express.Router();

// user
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// donasi
router.get('/donasi', getAllDonasi);
router.get('/donasi/:id', getDonasiById); //jangan lupa buat settingan url nya
router.post('/donasi', createDonasi);
router.patch('/donasi/:id', updateDonasi);
router.delete('/donasi/:id', deleteDonasi);

// kategori
router.get('/kategori', getAllKategori);
router.get('/kategori/:id', getKategoriById); //jangan lupa buat settingan url nya
router.post('/kategori', createKategori);

// order
router.get('/order', getAllOrder);
router.get('/order/:id', getOrderById); //jangan lupa buat settingan url nya
router.post('/order', createOrder);
router.patch('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);

// histori
router.get('/histori', getAllHistori);
router.get('/histori/:id', getHistoriById); //jangan lupa buat settingan url nya
router.post('/histori', createHistori);
router.patch('/histori/:id', updateHistori);
router.delete('/histori/:id', deleteHistori);

export default router;
