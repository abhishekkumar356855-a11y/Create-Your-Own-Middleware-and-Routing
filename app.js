const express = require('express');

const app = express();
const PORT = 3000;

// Custom Middleware function: req object par 'user' property add karta hai
const userMiddleware = (req, res, next) => {
    req.user = 'Guest';
    next();
};

// Route: /welcome jaha middleware apply kiya gaya hai
app.get('/welcome', userMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Server ko port 3000 par start karna
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
