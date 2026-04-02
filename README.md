# 💰 Finance Dashboard Backend (LedgerFlow)

A scalable backend system for managing financial records, user roles, and analytics.  
Built using **Node.js, Express, PostgreSQL, and Prisma ORM**.

---

## 🚀 Features

### 👤 User & Role Management
- Create and manage users
- Role-based access control (RBAC)
- Roles:
  - **Viewer** → Read-only access
  - **Analyst** → View + analytics
  - **Admin** → Full access (CRUD + user management)

---

### 💰 Financial Records
- Create, read, update, delete records
- Fields:
  - Amount
  - Type (INCOME / EXPENSE)
  - Category
  - Date
  - Notes
- Filter by:
  - Date range
  - Category
  - Type

---

### 📊 Dashboard APIs
- Total Income
- Total Expenses
- Net Balance
- Category-wise aggregation
- Recent transactions
- Trend-ready structure

---

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based route protection
- Secure API access

---

### ✅ Validation & Error Handling
- Input validation using Zod
- Proper HTTP status codes
- Graceful error responses

---

### 🗄️ Data Persistence
- PostgreSQL database
- Prisma ORM for schema & queries

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT (jsonwebtoken)
- Zod (validation)

---

