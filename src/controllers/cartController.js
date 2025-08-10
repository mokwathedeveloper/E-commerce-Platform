const User = require('../models/User');

// @route   GET api/cart
// @desc    Get user cart
// @access  Private
exports.getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.product');
    res.json(user.cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST api/cart
// @desc    Add product to cart
// @access  Private
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const productIndex = user.cart.findIndex(
      (item) => item.product == productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE api/cart/:productId
// @desc    Remove product from cart
// @access  Private
exports.removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cart = user.cart.filter(
      ({ product }) => product.toString() !== req.params.productId
    );

    await user.save();
    res.json(user.cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
