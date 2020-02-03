require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

//connect to db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => console.log('Database connection error'));
mongoose.connection.once('open', () => console.log('Database connected'));

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routes
const postsRoute = require('./routes/posts_route');
app.use('/posts',postsRoute);

//start server
const port = process.env.PORT
app.listen(port, () => console.log(`Server started on port: ${port}`));