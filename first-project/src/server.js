const express = require('express');

// Initialize express
const app = express();

app.get('/sayHello', (request, response) => {
  response.send('Hello, world!');
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
