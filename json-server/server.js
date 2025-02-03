const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Указываем файл с данными
const middlewares = jsonServer.defaults(); // Подключаем стандартные middleware

// Используем middleware (например, для обработки CORS)
server.use(middlewares);

// Подключаем роутер
server.use(router);

// Запускаем сервер на порту 4000
server.listen(4000, () => {
  console.log("JSON Server is running on http://localhost:4000");
});
