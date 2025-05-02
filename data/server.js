const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Enable CORS and disable caching
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});