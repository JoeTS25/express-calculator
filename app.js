const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { findMean, findMedian, freqCount, findMode } = require("./helpers");

app.get('/mean', function(req, res, next) {
    let numbers = req.query.nums;
    let result = {
        operation: "mean",
        result: findMean(numbers)
    }

    return res.send(result);
});

app.get('/median', function(req, res, next) {
    let numbers = req.query.nums;
    let result = {
        operation: "median",
        result: findMedian(numbers)
    }
    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    let numbers = req.query.nums;
    let result = {
        operation: "mode",
        result: findMode(numbers)
    }
    return res.send(result);
});


// error handling

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    
    return next(err);
  });
  
  
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
  
  // server 
  app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });
  