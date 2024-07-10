import Donasi from '../models/DonasiModel.js';

export const getAllDonasi = async (req, res) => {
  try {
    const donasi = await Donasi.findAll();
    res.json(donasi);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const getDonasiById = async (req, res) => {
  try {
    const donasi = await Donasi.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(donasi[0]);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
export const createDonasi = async (req, res) => {
  try {
    await Donasi.create(req.body);
    res.json({
      massage: 'Donasi Create',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const updateDonasi = async (req, res) => {
  try {
    await Donasi.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Donasi Updated',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const deleteDonasi = async (req, res) => {
  try {
    await Donasi.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Donasi Delete',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
