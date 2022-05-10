const express = require('express');
const app = express();
const cors = require('cors');

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

// app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname, './Public/index.html' ));
})




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
