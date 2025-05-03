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

## 🚀 Live API Endpoint

You can test the live deployed backend using this link:

🔗 **[Live Deployed Link](https://backend-task-1-ewy8.onrender.com/api/restaurants?page=1&limit=20)**  
This fetches a paginated list of restaurants using query parameters `page` and `limit`.

## 📬 Postman Collection

To explore and test all available endpoints, use the official Postman collection:

🔗 **[View Postman Collection](https://grey-moon-163200.postman.co/workspace/School-Management~3c41aca5-5c6e-4657-b64f-a32337b585f2/collection/29155329-f9ab6124-4a78-4db9-a862-254f15ef666d?action=share&creator=29155329)**

---

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
