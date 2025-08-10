const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products
// @access  Public
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   POST api/products
// @desc    Create a product
// @access  Private/Admin
exports.createProduct = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  const { name, description, price, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private/Admin
exports.updateProduct = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  const { name, description, price, category } = req.body;

  // Build product object
  const productFields = {};
  if (name) productFields.name = name;
  if (description) productFields.description = description;
  if (price) productFields.price = price;
  if (category) productFields.category = category;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
exports.deleteProduct = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    await product.remove();

    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).send('Server Error');
  }
};
