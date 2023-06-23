var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const GetDetail = require('./routes/config/database');
const InsertNewData = require('./routes/Routs/InsertDetail');
const GetDetailRouter = require('./routes/Routs/GetAllDetail');
const UpdateUserRouter = require('./routes/Routs/UpdateDetail');
const DeleteUserRouter = require('./routes/Routs/DeleteDetail');
const cors = require('cors');
const GetByIdRouter = require('./routes/Routs/GetById');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', InsertNewData)
app.use('/', GetDetailRouter)
app.use('/', UpdateUserRouter)
app.use('/', DeleteUserRouter)
app.use('/get', GetByIdRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
