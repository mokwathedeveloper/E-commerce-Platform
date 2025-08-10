const Order = require('../models/Order');

// @route   GET api/admin/orders
// @desc    Get all orders (Admin only)
// @access  Private/Admin
exports.getAllOrders = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    const orders = await Order.find().populate('user', 'username').populate('products.product', 'name price');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT api/admin/orders/:id
// @desc    Update order status (Admin only)
// @access  Private/Admin
exports.updateOrderStatus = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.status = status;
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
