const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/adminOrderController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/orders', authMiddleware, getAllOrders);
router.put('/orders/:id', authMiddleware, updateOrderStatus);

module.exports = router;
