# Proyecto: Búsqueda de Películas con OMDb API 🎥

Este proyecto es una aplicación web que permite a los usuarios buscar información sobre películas mediante la [OMDb API](https://www.omdbapi.com/). La aplicación utiliza Node.js y Express en el backend para gestionar las claves de la API y servir el contenido estático.

---

## Tecnologías Utilizadas 🚀

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Dependencias**:
  - `dotenv`: Para gestionar las variables de entorno.
  - `path`: Para manejar rutas de archivos.
  - `axios`: Para realizar solicitudes HTTP.

---

## Funcionalidades 🛠️

1. **Búsqueda de Películas**:
   - Los usuarios pueden ingresar el título de una película en un campo de búsqueda.
   - La aplicación consulta la OMDb API para obtener información como el título, sinopsis, clasificación y el póster de la película.

2. **Manejo de Errores**:
   - Si la película no se encuentra, se muestra un mensaje de error amigable y una imagen de "404" personalizada.

3. **Claves Seguras**:
   - La clave de la API se maneja a través de un archivo `.env` para evitar exponer información sensible.

4. **Interfaz de Usuario Dinámica**:
   - Los datos de la película se muestran en una interfaz limpia y responsiva al realizar la búsqueda.

---

## Estructura del Proyecto 📂

```
Proyecto/
├── assets/                  # Archivos estáticos (imágenes, CSS, JS)
├── .env_example             # Ejemplo de variables de entorno(Modificar con tu API_KEY y el puerto)
├── .gitignore               # Archivos y carpetas ignorados por Git
├── index.html               # Archivo HTML principal
├── server.js                # Backend con Node.js y Express
├── package.json             # Configuración del proyecto y dependencias
└── README.md                # Documentación del proyecto
```

---

## Instalación y Ejecución 🛴

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Ale2030/infocine-api.git
   cd infocine-api
   ```

2. **Instalar dependencias**:
   ```bash
   npm install 
   ```

3. **Configurar el archivo `.env`**:
   - Copia el archivo `.env_example` a `.env`.
   - Agrega tu clave de la OMDb API.

4. **Iniciar el servidor**:
   ```bash
   npm start
   ```

5. **Abrir en el navegador**:
   Visita `http://localhost:3000` para usar la aplicación.

---

## Uso 🎬

1. Ingresa el título de una película en el campo de búsqueda.
2. Presiona el botón "Buscar".
3. Visualiza la información de la película, incluyendo el título, sinopsis, clasificación y póster.
4. Si la película no se encuentra, se mostrará un mensaje de error y una imagen predeterminada.
