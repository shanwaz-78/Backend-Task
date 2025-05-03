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
}
