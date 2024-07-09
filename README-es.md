# 🎈 API RESTful - Administrar tus Tareas

Esta es una API RESTful para administrar/crear/modificar/eliminar tareas. Desarrollado personalmente y es la primera API.

# ✨Recomendación
Mi recomendación es utilizar [Postman](https://www.postman.com/) para probar la API. Si no sabes cómo moverte por Postman, puedes ver vídeos que lo explican detalladamente.

# 🔌 Puntos finales o EndPoints
Aquí te presento una “Tabla Pequeña” con la información de forma resumida que podrás ver en los siguientes enunciados. Claramente allí encontrarás la información de una forma más completa y específica.
- `POST (MÉTODO) | "/api/tareas" | Crear una nueva tarea`
- `OBTENER (MÉTODO) | "/api/tareas" | Obtener todas las tareas`
- `OBTENER (MÉTODO) | "/api/tareas/:id" | Obtener una tarea específica por ID`
- `PONER (MÉTODO) | "/api/tareas/:id" | Actualizar una tarea existente`
- `BORRAR (MÉTODO) | "/api/tareas/:id" | Eliminar una tarea específica por ID`

## 🔋 Crea una nueva tarea

- **Método**: `POST /api/tasks`
- **Cuerpo**:
 ```json
 {
 "title": "Mi primera tarea",
 "description": "Llama a mi cachorro"
 }
 ```
- **Respuesta**:
 ```json
 {
 "title": "Mi primera tarea",
 "description": "Llama a mi cachorro",
 "completado": falso,
 "_id": "668ca4c5450fd963604bbc68",
 "createdAt": "2024-07-09T02:47:33.226Z",
 "__v": 0
 }
 ```
## 🥇 Obtener todas las tareas

- **Método**: `GET /api/tasks`
- **Descripción**: Obtiene todas las tareas que han sido Publicadas.

---

Por identificación
- **Método**: `GET /api/tasks/{id}`
- **Descripción**: Obtiene información sobre una tarea específica.

## ⚙ Actualizar una tarea por ID

- **Método:** `PUT /api/tasks/{id}`
- **Descripción:** Actualiza una tarea existente por su ID.
- **Cuerpo:**
 ```json
 {
 "title": "Tarea actualizada",
 "description": "Descripción actualizada",
 "completado": verdadero
 }
 ```
- **Respuesta:**
 ```json
 {
 "title": "Tarea actualizada",
 "description": "Descripción actualizada",
 "completado": verdadero,
 "_id": "668ca4c5450fd963604bbc68",
 "createdAt": "2024-07-09T02:47:33.226Z",
 "__v": 0
 }
 ```
## ❌ Eliminar una tarea por ID

- **Método:** `BORRAR /api/tasks/{id}`
- **Descripción:** Elimina una tarea específica por su ID.

# 🌐 Cómo ejecutar el proyecto

1. Clonar el Repositorio ```git clone https://github.com/tu_usuario/to-do-API.git```

2. Instalar dependencias ``` npm install ```

3. Configure el .env | Copie el contenido de `.env-example` al archivo `.env` y agregue el URI de su base de datos

4. Inicie el proyecto ``` node src/server.js ```

# ⚖ README.md en Español Aquí
[README-es.md](README-es.md)
