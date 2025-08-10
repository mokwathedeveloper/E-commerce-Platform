# Documentation: shopping-cart Branch

## Purpose
This document provides detailed information about the `shopping-cart` branch, which implements shopping cart functionality for authenticated users.

## Scope
The `shopping-cart` branch allows authenticated users to add, remove, and view items in their shopping cart. The `User` model is updated to include a cart field.

## Endpoints
| HTTP Method | Path                | Description                |
|-------------|---------------------|----------------------------|
| GET         | /api/cart           | Get the user's cart.       |
| POST        | /api/cart           | Add a product to the cart. |
| DELETE      | /api/cart/:productId| Remove a product from the cart.|

## Setup Instructions
1. Follow the setup instructions from the `product-catalog` branch.

## File Structure Diagram
```
E-commerce-Platform/
├── src/
│   ├── controllers/
│   │   └── cartController.js
│   ├── models/
│   │   └── User.js (modified)
│   ├── routes/
│   │   └── cart.js
│   └── ...
└── ...
```

## Commit Log
- feat: Implement shopping cart functionality
