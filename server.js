require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//connect to db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => console.log('Database connection error'));
mongoose.connection.once('open', () => console.log('Database connected'));

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//routes
const postsRoute = require('./routes/posts_route');
app.use('/posts', postsRoute);
const commentsRoute = require('./routes/comments_route');
app.use('/comments', commentsRoute);

//start server
const port = process.env.PORT
app.listen(port, () => console.log(`Server started on port: ${port}`));