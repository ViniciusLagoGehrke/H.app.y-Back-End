import express from 'express';
import './database/connection';

import routes from './routes.ts';

const app = express();

app.use(express.json()); //habilita JSON no express
app.use(routes);

app.listen(3333); // localhost: 3333

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP : GET, POST, PUT, DELETE
// Parâmetros

// Query Params: http://localhost:3333/users?search=diego&page2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)

// Body: http://localhost:3333/users