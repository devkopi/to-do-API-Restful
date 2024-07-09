# 🎈 to-do API

Esta es una API RESTful para gestionar/crear/modificar/eliminar tareas.

# ✨ Recomendación
Mi recomiendación es usar Postman para probar la API. En caso de no saber moverse en Postman puedes mirar videos los cuales te explican de manera detalla.

# 🔋 Crear una nueva tarea

- **Método**: `POST /api/tasks`
- **Body**:
  ```json
  {
    "title": "Mi primera tarea",
    "description": "Llamar a mi perrito"
  }

- **Respuesta**:
    ```json
  {
  "title": "Mi primera tarea",
  "description": "Llamar a mi perrito",
  "completed": false,
  "_id": "668ca4c5450fd963604bbc68",
  "createdAt": "2024-07-09T02:47:33.226Z",
  "__v": 0
  }

# 🥇 Obtener Todas las Tareas

- **Método**: `GET /api/tasks`
- **Descripción**: Obtiene todas las tareas que se hayan Posteado.

---

Por ID
- **Método**: `GET /api/tasks/{id}`
- **Descripción**: Obtiene información sobre una tarea Especifica.

# ⚙ Actualizar una Tarea por ID

- **Método:** PUT /api/tasks/{id}
- **Descripción:** Actualiza una tarea existente por su ID.
- **Body:**
    ```json
  {
  "title": "Tarea actualizada",
  "description": "Descripción actualizada",
  "completed": true
  }

- **Respuesta:**
    ```json
  {
  "title": "Tarea actualizada",
  "description": "Descripción actualizada",
  "completed": true,
  "_id": "668ca4c5450fd963604bbc68",
  "createdAt": "2024-07-09T02:47:33.226Z",
  "__v": 0
  }

# ❌ Eliminar una Tarea por ID

- **Método:** DELETE /api/tasks/{id}
- **Descripción:** Elimina una tarea específica por su ID.

# 🌐 Cómo Ejecutar el Proyecto

1. Clona el Repositorio ```git clone https://github.com/tu_usuario/to-do-API.git```

2. Instala Depencias ``` npm install ```

3.  Configura el .env | Copia el `.env-example` al archivo `.env` y agrega la URI de tu base de datos

4. Inicia el proyecto ``` node src/server.js ```
