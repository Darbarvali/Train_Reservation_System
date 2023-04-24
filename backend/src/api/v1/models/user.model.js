const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');


/**
 * @openapi
 * definations:
 *   User:
 *     type: Object
 *     properties:
 *       id:
 *         type:integer
 */

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    seats: {
      type: Number,
    },
    numbers: {
      type: Array,
    }
    
  },
  { timestamps: true }
);

// add plugin that converts mongoose to JSON
userSchema.plugin(toJSON);

userSchema.plugin(paginate);


/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports= User;
