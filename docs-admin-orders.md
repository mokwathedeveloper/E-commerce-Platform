# Documentation: admin-orders Branch

## Purpose
This document provides detailed information about the `admin-orders` branch, which implements order management functionality for administrators.

## Scope
The `admin-orders` branch allows administrators to view all orders and update their statuses. A new `Order` model is introduced to represent customer orders.

## Endpoints
| HTTP Method | Path                | Description                |
|-------------|---------------------|----------------------------|
| GET         | /api/admin/orders   | Get all orders.            |
| PUT         | /api/admin/orders/:id| Update an order's status.  |

## Setup Instructions
1. Follow the setup instructions from the `shopping-cart` branch.

## File Structure Diagram
```
E-commerce-Platform/
├── src/
│   ├── controllers/
│   │   └── adminOrderController.js
│   ├── models/
│   │   └── Order.js
│   ├── routes/
│   │   └── admin.js
│   └── ...
└── ...
```

## Commit Log
- feat: Implement admin order management
