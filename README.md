# E-commerce Platform Backend

## Project Overview
This project is a robust backend-only e-commerce platform designed to provide core functionalities for an online store. It enables users to manage products, carts, and orders, while administrators have extended capabilities for product and order management. The platform is built with a focus on scalability, maintainability, and adherence to modern backend development practices.

## Key Features

*   **User Registration and Login**: Secure user authentication system with JWT (JSON Web Tokens) for session management and bcrypt for password hashing.
*   **Product Catalog**: Comprehensive CRUD (Create, Read, Update, Delete) operations for products, including categorization.
*   **Shopping Cart**: Functionality for authenticated users to add, remove, and view items in their shopping cart.
*   **Admin Actions**:
    *   **Product Management**: Administrators can create, update, and delete products.
    *   **Order Management**: Administrators can view all customer orders and update their statuses.

## Technology Stack

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
*   **MongoDB**: NoSQL database for flexible data storage.
*   **Mongoose**: MongoDB object modeling for Node.js, providing a straightforward, schema-based solution to model your application data.
*   **bcryptjs**: Library for hashing passwords.
*   **jsonwebtoken**: Library for implementing JSON Web Tokens for secure authentication.

## Branching Strategy
This project follows a feature-branching workflow. Each new feature or significant change is developed in its own dedicated branch, stemming from the `main` branch. Each feature branch is accompanied by its own documentation file (`docs-<feature-name>.md`) detailing its purpose, scope, endpoints, and file structure. Once a feature is complete and reviewed, it is merged back into `main`.

## Folder Structure
```
E-commerce-Platform/
├── src/
│   ├── config/             # Database connection and other configurations
│   ├── controllers/        # Business logic for handling requests
│   ├── middleware/         # Express middleware (e.g., authentication)
│   ├── models/             # Mongoose schemas and models
│   ├── routes/             # API routes definitions
│   └── utils/              # Utility functions
├── .env.example            # Example environment variables
├── .gitignore              # Files and directories to be ignored by Git
├── index.js                # Application entry point
├── app.js                  # Express application setup
├── package.json            # Project metadata and dependencies
├── README.md               # Project overview and documentation
└── docs-<branch-name>.md   # Documentation for specific branches/features
```

## Installation Guide

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mokwathedeveloper/E-commerce-Platform.git
    cd E-commerce-Platform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project and copy the contents from `.env.example` into it. Update the values as per your environment.

4.  **Run the server:**
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:3000` (or the `PORT` you configured).

## Environment Variables

Ensure your `.env` file contains the following variables:

*   `PORT`: The port number on which the server will run (e.g., `3000`).
*   `MONGODB_URI`: Your MongoDB connection string (e.g., `mongodb://localhost:27017/ecommerce` or a MongoDB Atlas URI).
*   `JWT_SECRET`: A strong, secret key used for signing and verifying JWTs. Generate a long, random string for this.

## API Documentation

Below are the main API endpoints available in this platform:

| HTTP Method | Path                     | Description                                  |
| :---------- | :----------------------- | :------------------------------------------- |
| `GET`       | `/health`                | Checks the server status.                    |
| `POST`      | `/api/auth/register`     | Registers a new user.                        |
| `POST`      | `/api/auth/login`        | Logs in an existing user.                    |
| `GET`       | `/api/products`          | Retrieves a list of all products.            |
| `GET`       | `/api/products/:id`      | Retrieves a single product by ID.            |
| `POST`      | `/api/products`          | Creates a new product (Admin only).          |
| `PUT`       | `/api/products/:id`      | Updates an existing product (Admin only).    |
| `DELETE`    | `/api/products/:id`      | Deletes a product (Admin only).              |
| `GET`       | `/api/cart`              | Retrieves the authenticated user's cart.     |
| `POST`      | `/api/cart`              | Adds a product to the authenticated user's cart. |
| `DELETE`    | `/api/cart/:productId`   | Removes a product from the authenticated user's cart. |
| `GET`       | `/api/admin/orders`      | Retrieves all orders (Admin only).           |
| `PUT`       | `/api/admin/orders/:id`  | Updates the status of an order (Admin only). |

## Contributing Guidelines

We welcome contributions to this project! To contribute, please follow these guidelines:

1.  **Fork the repository** and clone it to your local machine.
2.  **Create a new feature branch** from `main` for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Implement your feature** or bug fix.
4.  **Create a dedicated documentation file** for your branch in the `docs/` directory (e.g., `docs-your-feature-name.md`), detailing its purpose, scope, endpoints, and any relevant information.
5.  **Commit your changes** with clear, concise, and descriptive commit messages. Follow the conventional commits specification if possible.
6.  **Push your branch** to your forked repository.
7.  **Open a Pull Request** to the `main` branch of the original repository, describing your changes in detail.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.