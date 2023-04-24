
  
const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const  userService  = require('../../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getData = catchAsync(async (req, res) => {
  const data = await userService.getData();
  res.status(httpStatus.CREATED).send(data);
});


module.exports = {
  createUser,
  getData
};
