const app = require('./app');

const port = '8888';

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
  console.log(`This is a test`);
});
