const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 100
  },
  username: {
    type: String,
    required: true,
    unique: true,
    min: 8,
    max: 60
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 60
  },
  surName: {
    type: String,
    max: 100
  },
  firstName: {
    type: String,
    max: 100
  },
  collections: {
    type: mongoose.Types.ObjectId,
    ref: 'Collections'
  }
});

userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.surName}`;
});

module.exports = mongoose.model('User', userSchema);
