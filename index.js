const express = require('express');
const quizzes = require('./db/quizzes');
// const cors = require('cors');

const app = express();
const PORT = 3001;
app.get('/', (req, res) => {
    res.send('Hello Folks!!');
});

app.get('/quiz', (req, res) => {
    console.log('Quiz Data ', quizzes)
    res.send(quizzes.data);
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on ${PORT}`);
})