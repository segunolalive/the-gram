const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = mongoose.model('Photo', photoSchema);
