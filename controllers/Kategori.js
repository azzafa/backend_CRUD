import Kategori from '../models/KategoriModel.js';

export const getAllKategori = async (req, res) => {
  try {
    const kategori = await Kategori.findAll();
    res.json(kategori);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const getKategoriById = async (req, res) => {
  try {
    const kategori = await Kategori.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(kategori[0]);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
export const createKategori = async (req, res) => {
  try {
    await Kategori.create(req.body);
    res.json({
      massage: 'Kategori Create',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
