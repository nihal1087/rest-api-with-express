# Startup Planet API 🚀

A RESTful API built with **Node.js** and **Express.js** that provides access to a curated dataset of promising startups from around the world.  
The API supports **filtering, searching, and querying startup data** by multiple criteria.

---

## 📌 Features

- RESTful API design
- Filter startups using query parameters
- Dynamic filtering using URL path parameters
- Clean project structure using **controllers** and **routers**
- Proper error handling with meaningful HTTP status codes
- CORS enabled for frontend integration
- ES Modules (`import/export`) support

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript (ES Modules)**
- **CORS**

---

## 📂 Project Structure

```
REST-API-WITH-EXPRESS/
│
├── controllers/
│ ├── getAllData.js
│ └── getDataByPathParams.js
│
├── data/
│ └── data.js
│
├── routes/
│ └── apiRoutes.js
│
├── server.js
├── package.json
├── README.md
└── test.http
```

---

## Getting Started 🚦

```
git clone https://github.com/nihal1087/rest-api-with-express.git
cd startup-directory-api
npm install
npm start
```

Server runs at:
```
http://localhost:8000
```

---

## API Endpoints 📡

### Get all destinations
```
GET /api
```
### Example
```
http://localhost:8000/api
```

### Filter with query params
```
GET /api?country=india&has_mvp=true
```
### Supported query params
- industry
- country
- continent
- is_seeking_funding
- has_mvp
  
### Path params
```
GET /api/:field/:term
```
### Supported fields 
- country
- continent
- industry

### Examples
```
/api/country/india
/api/continent/europe
/api/industry/ai

```
---

## ❌ Error Handling
### Invalid field
```
GET /api/has_mvp/true
```
### Response
```
{
  "message": "Search field not allowed. Please use only country, continent, industry"
}
```
- Status Code: 400 Bad Request
---
### No matching data found
```
{
  "message": "No startup found matching the criteria."
}
```
- Status Code: 404 Not Found
---
### Invalid route
```
{
  "message": "Endpoint not found. Please check the API documentation."
}

```
- Status Code: 404 Not Found
--- 

## 🌐 CORS Support
- CORS is enabled to allow frontend applications to consume this API.


## Deployment ☁️

Deployed on Render using:
- Build command: `npm install`
- Start command: `npm start`
- Dynamic port binding via `process.env.PORT`

## Live:
https://rest-api-with-express-6mrj.onrender.com

---
### ⭐ If you like this project, consider giving the repository a star!

 
