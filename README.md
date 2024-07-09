# 🎈 to-do API

This is a RESTful API to manage/create/modify/delete tasks. Personally developed and it is the first API.

# ✨ Recommendation
My recommendation is to use Postman to test the API. If you don't know how to get around Postman, you can watch videos which explain it in detail.

# 🔋 Create a new task

- **Method**: `POST /api/tasks`
- **Body**:
 ```json
 {
 "title": "My first task",
 "description": "Call my puppy"
 }

- **Answer**:
 ```json
 {
 "title": "My first task",
 "description": "Call my puppy",
 "completed": false,
 "_id": "668ca4c5450fd963604bbc68",
 "createdAt": "2024-07-09T02:47:33.226Z",
 "__v": 0
 }
 ```
# 🥇 Get All Tasks

- **Method**: `GET /api/tasks`
- **Description**: Obtains all the tasks that have been Posted.

---

By ID
- **Method**: `GET /api/tasks/{id}`
- **Description**: Obtains information about a Specific task.

# ⚙ Update a Task by ID

- **Method:** PUT /api/tasks/{id}
- **Description:** Updates an existing task by its ID.
- **Body:**
 ```json
 {
 "title": "Task updated",
 "description": "Updated description",
 "completed": true
 }

- **Answer:**
 ```json
 {
 "title": "Task updated",
 "description": "Updated description",
 "completed": true,
 "_id": "668ca4c5450fd963604bbc68",
 "createdAt": "2024-07-09T02:47:33.226Z",
 "__v": 0
 }
 ```
# ❌ Delete a Task by ID

- **Method:** DELETE /api/tasks/{id}
- **Description:** Deletes a specific task by its ID.

# 🌐 How to Run the Project

1. Clone the Repository ```git clone https://github.com/tu_usuario/to-do-API.git```

2. Install Dependencies ``` npm install ```

3. Configure the .env | Copy the `.env-example` to the `.env` file and add your database URI

4. Start the project ``` node src/server.js ```