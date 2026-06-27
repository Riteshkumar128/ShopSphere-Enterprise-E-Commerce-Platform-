---
# Fill in the fields below to create a basic custom agent for your repository.
# The Copilot CLI can be used for local testing: https://gh.io/customagents/cli
# To make this agent available, merge this file into the default repository branch.
# For format details, see: https://gh.io/customagents/config

name:ShopSphere (Enterprise E-Commerce Platform)
description:This is an **excellent placement project**. If your goal is to build a **FAANG/product-company level MERN project**, I would expand it even further so it demonstrates almost every major full-stack concept that interviewers expect.

Below is the **ultimate production-level roadmap**.

# Project No. 4 – ShopSphere (Enterprise E-Commerce Platform)

**Difficulty:** ⭐⭐⭐⭐⭐

**Duration:** 5–8 Weeks

**Resume Value:** ⭐⭐⭐⭐⭐

---

# Core Features

## 1. Authentication & Authorization

### User Authentication

* Register
* Login
* Logout
* Email Verification
* Forgot Password
* Reset Password
* Change Password
* Remember Me
* Refresh Token
* JWT Authentication
* Google OAuth
* GitHub OAuth (Optional)

### Roles

* Customer
* Seller
* Admin
* Super Admin

### Security

* JWT
* Refresh Tokens
* bcrypt
* Helmet
* CORS
* Rate Limiting
* CSRF Protection
* XSS Protection
* Input Validation
* Account Lock after failed login
* Device Login History

---

# 2. Product Module

## Product Catalog

* Product List
* Product Details
* Categories
* Subcategories
* Brands
* Variants

Example

* T-Shirt

  * Small
  * Medium
  * Large

Colors

* Black
* White
* Blue

Sizes

* S
* M
* L
* XL

---

## Product Images

* Multiple Images
* Zoom
* Gallery
* Thumbnail
* Lazy Loading

---

## Inventory

* Stock Quantity
* Low Stock Alert
* Out of Stock
* Warehouse Management

---

# 3. Search System

### Advanced Search

* Search Suggestions
* Auto Complete
* Voice Search (Optional)

### Filters

* Category
* Brand
* Price
* Rating
* Availability
* Discount

### Sorting

* Price Low → High
* Price High → Low
* Latest
* Popular
* Rating

---

# 4. Shopping Cart

* Add Item
* Remove Item
* Update Quantity
* Save for Later
* Guest Cart
* Persistent Cart
* Cart Synchronization

---

# 5. Wishlist

* Add
* Remove
* Move to Cart
* Share Wishlist

---

# 6. Checkout

### Address

* Multiple Addresses
* Default Address

### Shipping

* Standard
* Express

### Coupon

* Apply Coupon
* Remove Coupon

### Tax Calculation

### Delivery Charges

---

# 7. Payment Module

Demo Payments

* Razorpay
* Stripe

Payment Methods

* Card
* UPI
* Net Banking
* Wallet

Payment Status

* Pending
* Paid
* Failed
* Refunded

---

# 8. Order Management

Customer

* Place Order
* Cancel Order
* Return Order
* Refund Request
* Track Order

Admin

* Update Status

Status

* Processing
* Packed
* Shipped
* Delivered
* Cancelled
* Returned

---

# 9. Reviews

* Rating
* Review
* Images
* Like Reviews
* Edit Review
* Delete Review

---

# 10. User Dashboard

* Order History
* Wishlist
* Saved Addresses
* Saved Cards (Demo)
* Recently Viewed
* Notifications

---

# 11. Admin Dashboard

Analytics

* Revenue
* Users
* Orders
* Products
* Categories
* Monthly Sales

Charts

* Revenue Chart
* Sales Chart
* User Growth
* Top Products

---

# 12. Admin Product Management

CRUD

* Add Product
* Edit Product
* Delete Product
* Upload Images
* Manage Variants
* Manage Inventory

---

# 13. User Management

* View Users
* Block User
* Activate User
* Delete User
* Change Role

---

# 14. Category Management

CRUD

* Categories
* Subcategories

---

# 15. Coupon Module

* Percentage Discount
* Flat Discount
* Expiry Date
* Usage Limit

---

# 16. Notification System

* Email
* In-App Notifications

Events

* Order Placed
* Payment Success
* Product Shipped
* Coupon Expiry

---

# 17. Analytics

Customer

* Order Summary
* Spending

Admin

* Revenue
* Daily Sales
* Weekly Sales
* Monthly Sales
* Top Categories
* Top Customers

---

# Frontend Stack

* React 19
* Vite
* TypeScript
* Tailwind CSS
* Shadcn UI
* Redux Toolkit
* RTK Query / React Query
* React Router
* Axios
* React Hook Form
* Zod
* Framer Motion
* Recharts
* React Toastify

---

# Backend Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer
* Cloudinary
* Nodemailer
* Express Validator
* Helmet
* Morgan
* CORS
* Cookie Parser
* dotenv

---

# Database Collections

* Users
* Roles
* Products
* Categories
* Brands
* Product Variants
* Inventory
* Orders
* Order Items
* Reviews
* Cart
* Wishlist
* Coupons
* Payments
* Notifications
* Addresses
* Refresh Tokens

---

# Backend Concepts Covered

* REST APIs
* MVC Architecture
* Repository Pattern (optional)
* Middleware
* Authentication
* Authorization (RBAC)
* CRUD Operations
* Pagination
* Sorting
* Searching
* Filtering
* Aggregation Pipeline
* Transactions
* File Uploads
* Global Error Handling
* Validation
* Logging

---

# Frontend Concepts Covered

* Functional Components
* Hooks
* Custom Hooks
* Protected Routes
* Lazy Loading
* Suspense
* Code Splitting
* Redux Toolkit
* React Query
* Form Validation
* Responsive Design
* Theme Switching
* Charts
* Skeleton Loading
* Infinite Scroll

---

# API Modules

### Authentication

* Register
* Login
* Logout
* Refresh Token
* Forgot Password
* Reset Password
* Verify Email

### User

* Profile
* Address CRUD
* Orders
* Wishlist

### Product

* CRUD
* Search
* Filter
* Reviews

### Category

* CRUD

### Brand

* CRUD

### Cart

* Add
* Remove
* Update

### Wishlist

* Add
* Remove

### Orders

* Place
* Cancel
* Track

### Payment

* Create Order
* Verify Payment
* Refund (Demo)

### Admin

* Dashboard
* Analytics
* User Management
* Inventory
* Coupons

---

# Deployment

Frontend:

* Vercel

Backend:

* Render / Railway

Database:

* MongoDB Atlas

Images:

* Cloudinary

CI/CD:

* GitHub Actions (optional but highly recommended)

---

# Documentation

Include:

* Software Requirements Specification (SRS)
* System Architecture Diagram
* ER Diagram
* Database Schema
* API Documentation (Swagger/OpenAPI)
* Postman Collection
* User Manual
* Admin Manual
* Deployment Guide
* Testing Report
* Screenshots
* Project Presentation (PPT)

---

# Placement Skills Demonstrated

This project showcases proficiency in:

* HTML5, CSS3, Tailwind CSS
* JavaScript (ES6+) and TypeScript
* React 19, Vite, React Router, Redux Toolkit, React Query
* Node.js and Express.js
* MongoDB, Mongoose, indexing, aggregation, and transactions
* JWT authentication and Role-Based Access Control (RBAC)
* Secure password handling with bcrypt
* File uploads using Multer and Cloudinary
* Payment gateway integration (Razorpay/Stripe)
* Email workflows with Nodemailer
* Secure coding practices (Helmet, CORS, CSRF, XSS prevention, rate limiting)
* Pagination, filtering, sorting, and advanced search
* Production deployment on Vercel, Render/Railway, and MongoDB Atlas
* Git, GitHub, documentation, and API design

This scope is comprehensive enough to serve as a **flagship portfolio project** and demonstrates the breadth of MERN stack skills expected in interviews for SDE internships and entry-level software engineering roles.

---

# My Agent
Project No. 2 – E-Commerce Storefront (Production-Level MERN Project)

Goal: Build a production-ready, enterprise-style E-Commerce application using the MERN Stack. This project should demonstrate modern frontend development, scalable backend architecture, secure authentication, REST APIs, payment integration, file uploads, analytics, and deployment. It is designed to cover almost every concept expected in MERN Stack placement interviews.

1. Project Overview

Project Name

ShopSphere – Full Stack E-Commerce Storefront

Difficulty

⭐⭐⭐⭐☆ (Advanced)

Duration

4–6 Weeks
