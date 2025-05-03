# Restaurant Management API

This is the backend API for the **Restaurant Management System**. It provides endpoints for managing restaurant-related data, such as restaurants (used as sample data), and other resources.

---

## 📌 API Endpoints

### 📄 GET `/api/restaurants`

Fetches a list of restaurants with optional pagination.

**Query Parameters:**

| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `page`    | Number | (Optional) Page number (default: 1)  |
| `limit`   | Number | (Optional) Number of results/page (default: 10) |

**Example Request:**
GET /api/restaurants?page=2&limit=5


**Response:**

```json
{
  "page": 2,
  "limit": 5,
  "total": 30,
  "data": [
    {
      "_id": "abcd1234",
      "name": "Pizza Palace",
      "location": "New York",
      "rating": 4.5
    },
  ]
}```

📂 Folder Structure:

├── dist
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controller
│   │   ├── index.js
│   │   └── restaurant.controller.js
│   ├── index.js
│   ├── model
│   │   └── Restaurant.model.js
│   ├── routes
│   │   ├── index.js
│   │   └── restaurants.routes.js
│   ├── services
│   │   ├── index.js
│   │   └── restaurant.service.js
│   └── types
│       └── restauranst.types.js
├── package.json
├── package-lock.json
├── render.yaml
├── restaurants.json
├── src
│   ├── app.ts
│   ├── config
│   │   └── db.ts
│   ├── controller
│   │   ├── index.ts
│   │   └── restaurant.controller.ts
│   ├── index.ts
│   ├── model
│   │   └── Restaurant.model.ts
│   ├── routes
│   │   ├── index.ts
│   │   └── restaurants.routes.ts
│   ├── services
│   │   ├── index.ts
│   │   └── restaurant.service.ts
│   └── types
│       └── restauranst.types.ts
└── tsconfig.json
