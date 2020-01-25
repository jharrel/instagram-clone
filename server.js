const express = require('express');
const app = express();

const config = require('./config');
const db = require('./config/database');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const cors = require('cors');

    app.use(express.urlencoded({limit: '50mb', extended: true }));
    app.use(express.json({ limit: '50mb' }));
    app.use(cors());

// const cors = (req, res, next) => {

//     app.use(express.urlencoded({limit: '50mb', extended: true }));
//     app.use(express.json({ limit: '50mb' }));
//     app.use(cors());

//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     next();
// }

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(cors);

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(config.port, console.log('Server has started on http://localhost:%s', config.port));