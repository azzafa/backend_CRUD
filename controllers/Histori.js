import Histori from '../models/HistoriModel.js';

export const getAllHistori = async (req, res) => {
  try {
    const histori = await Histori.findAll();
    res.json(histori);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const getHistoriById = async (req, res) => {
  try {
    const histori = await Histori.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(histori[0]);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
export const createHistori = async (req, res) => {
  try {
    await Histori.create(req.body);
    res.json({
      massage: 'Histori Create',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const updateHistori = async (req, res) => {
  try {
    await Histori.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Histori Updated',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const deleteHistori = async (req, res) => {
  try {
    await Histori.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Histori Delete',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
