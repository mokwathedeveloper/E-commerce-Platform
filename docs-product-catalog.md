# Documentation: product-catalog Branch

## Purpose
This document provides detailed information about the `product-catalog` branch, which implements CRUD functionality for products.

## Scope
The `product-catalog` branch adds the ability to create, read, update, and delete products. It also includes an authentication middleware to protect admin-only routes.

## Endpoints
| HTTP Method | Path                | Description                |
|-------------|---------------------|----------------------------|
| GET         | /api/products       | Get all products.          |
| GET         | /api/products/:id   | Get a single product by ID.|
| POST        | /api/products       | Create a new product.      |
| PUT         | /api/products/:id   | Update a product.          |
| DELETE      | /api/products/:id   | Delete a product.          |

## Setup Instructions
1. Follow the setup instructions from the `user-auth` branch.

## File Structure Diagram
```
E-commerce-Platform/
├── src/
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── product.js
│   └── ...
└── ...
```

## Commit Log
- feat: Add product CRUD functionality
