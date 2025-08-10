# Documentation: user-auth Branch

## Purpose
This document provides detailed information about the `user-auth` branch, which implements user registration and authentication.

## Scope
The `user-auth` branch adds user registration and login functionality using JWT-based authentication. Passwords are encrypted using bcrypt.

## Endpoints
| HTTP Method | Path                | Description                |
|-------------|---------------------|----------------------------|
| POST        | /api/auth/register  | Registers a new user.      |
| POST        | /api/auth/login     | Logs in an existing user.  |

## Setup Instructions
1. Follow the setup instructions from the `main` branch.
2. Add a `JWT_SECRET` to your `.env` file.

## File Structure Diagram
```
E-commerce-Platform/
├── src/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   └── ...
└── ...
```

## Commit Log
- feat: Add user registration and login functionality
