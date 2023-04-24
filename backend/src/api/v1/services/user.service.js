const { object } = require('joi');
const  User  = require('../models/user.model');

/**
 * Create a user
 * @param {Object} userbody
 * @return {Promise<User>}
 */
const createUser = async (userBody) => {
  console.log(userBody)
  const user = await User.create(userBody);
  return user;
};


/**
 * Get Data
 * @return {Promise<User>}
 */
const getData = async () =>{
  const data = await User.find();
  var available = Array.from({length: 80}, (_, i) => 1);
  for( const val of data){
    for( const x of val.numbers){
      available[x-1]=0
    }
  }
  return available;
}


module.exports = {
  createUser,
  getData
};
