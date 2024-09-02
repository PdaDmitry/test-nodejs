import { startServer } from './server.js';

startServer();

// // import express from 'express';
// // import req from 'express/lib/request';
// // import res from 'express/lib/response';

// // const PORT = 3000;
// // const app = express();

// // app.get('/', (req, res) => {
// //   res.json({
// //     message: 'Hello world!!!',
// //   });
// // });

// // app.use((req, res, next) => {
// //   console.log(`Time: ${new Date().toLocaleString()}`);
// //   next();
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// // ============================================================

// // src/index.js

// // import express from 'express';

// // const PORT = 3000;

// // const app = express();

// // // Middleware для логування часу запиту
// // app.use((req, res, next) => {
// //   console.log(`Time: ${new Date().toLocaleString()}`);
// //   next();
// // });

// // // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// // // наприклад, у запитах POST або PATCH
// // app.use(express.json());

// // // Маршрут для обробки GET-запитів на '/'
// // app.get('/', (req, res) => {
// //   res.json({
// //     message: 'Hello, World!',
// //   });
// // });

// // // Middleware для обробких помилок (приймає 4 аргументи)
// // app.use((err, req, res, next) => {
// //   res.status(500).json({
// //     message: 'Something went wrong',
// //   });
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// // =========================================================

// // src/index.js
// import cors from 'cors';
// import express from 'express';
// import pino from 'pino-http';

// const PORT = 3000;

// const app = express();

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(express.json());

// // app.use((req, res, next) => {
// //   console.log(`Time: ${new Date().toLocaleString()}`);
// //   next();
// // });

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World!',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'No found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(` Server is running on port ${PORT} `);
// });

// app.use(cors());
