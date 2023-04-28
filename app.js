const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { convertAndValidateNums, calculate_mean,calculate_median,find_mode} = require('./functions');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/mean',(req,res,next)=>{

    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNums(numsString)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let mean_result = calculate_mean(nums)

    let result = {
        operation: "mean",
        value: mean_result
    }

    res.send(result)
})

app.get('/median',(req,res,next)=>{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNums(numsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let median_result = calculate_median(nums);
    let result = {
        operation: "median",
        value: median_result
    }
    res.send(result)
})

app.get('/mode',(req,res,next)=>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNums(numsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let mode_result = find_mode(nums);
    let result = {
        operation: "mode",
        value: mode_result.map(function(x){return parseInt(x);})
    }
    res.send(result)

})



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




app.listen(3000, () => {
    console.log('Server running on port 3000')
})