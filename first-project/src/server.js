const express = require('express');

// Initialize express
const app = express();

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
