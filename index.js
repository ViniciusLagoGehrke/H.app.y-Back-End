import express from 'express';

const app = express();

app.use(express.json()); //habilita JSON no express

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP : GET, POST, PUT, DELETE
// Parâmetros

// Query Params: http://localhost:3333/users?search=diego&page2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)

// Body: http://localhost:3333/users

app.post('/users/:id', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);

  return response.json({ message: 'Hello World' });
});

app.listen(3333); // localhost: 3333