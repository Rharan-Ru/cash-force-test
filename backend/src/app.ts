import { NextFunction } from "express";
import router from "./routes";
import cors from 'cors';

// eslint-disable-next-line
const createError = require('http-errors');
// eslint-disable-next-line
const express = require('express');
// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const cookieParser = require('cookie-parser');
// eslint-disable-next-line
const logger = require('morgan');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// All routers
app.use(router);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: any, res: any, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next()
});

export default app;
