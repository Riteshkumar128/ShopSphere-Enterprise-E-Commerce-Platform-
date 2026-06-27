# ShopSphere – Enterprise E-Commerce Platform (MERN)

Production-style MERN starter with authentication, product catalog, cart, checkout/order flow, and admin analytics dashboard.

## Repository Structure

- `frontend/` — React + Vite + TypeScript app
- `backend/` — Express + MongoDB API

## Implemented Modules

### Backend API

- Authentication
  - Register
  - Login
  - Refresh token
  - Logout
  - Current user profile
- Product module
  - Product listing with search/filter/sort/pagination
  - Product details
  - Admin/Seller product CRUD
- Cart module
  - Add item
  - Update quantity
  - Remove item
  - View cart subtotal
- Orders
  - Checkout from cart
  - Coupon support (flat/percentage)
  - Tax + shipping calculation
  - Stock deduction
  - View user orders
  - Admin/Seller status updates
- Admin
  - Dashboard metrics (`users`, `products`, `orders`, `revenue`)
- Security basics
  - Helmet
  - CORS
  - Rate limiting
  - JWT access/refresh token flow
  - Password hashing via bcrypt

### Frontend

- Auth pages (login/register)
- Product listing and product detail page
- Protected cart and order history pages
- Checkout trigger from cart
- Role-gated admin dashboard page
- Redux Toolkit auth state + token persistence
- Axios API client with automatic refresh-token retry

## Setup

### 1) Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Required `.env` values:

- `MONGO_URI`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- optional: `PORT`, `CLIENT_URL`, token expiry values

### 2) Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend env:

- `VITE_API_URL` (default `http://localhost:5000/api`)

## API Base URL

- `http://localhost:5000/api`

## Key Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`
- `GET /products`
- `GET /products/:id`
- `GET /cart`
- `POST /cart`
- `PUT /cart`
- `DELETE /cart/:productId`
- `POST /orders`
- `GET /orders/mine`
- `GET /admin/dashboard`

## Notes

- This is a functional enterprise starter aligned to the roadmap and designed for extension (reviews, notifications, payment gateways, file uploads, OAuth, etc.).
- To use admin routes, set a user's `role` to `admin` or `super_admin` in MongoDB.
