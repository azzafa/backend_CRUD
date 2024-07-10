import Order from '../models/OrderModel.js';

export const getAllOrder = async (req, res) => {
  try {
    const order = await Order.findAll();
    res.json(order);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(order[0]);
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const createOrder = async (req, res) => {
  try {
    await Order.create(req.body);
    res.json({
      massage: 'Order Create',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const updateOrder = async (req, res) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Order Updated',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      massage: 'Order Delete',
    });
  } catch (error) {
    res.json({ massage: error.massage });
  }
};
