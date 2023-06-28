const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB();

// Init Middleware
app.use('/api/', require('./apis/user'));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

