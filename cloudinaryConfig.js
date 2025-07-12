// cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dmsecd2n5',
  api_key: '249337516794152',
  api_secret: '**********'
});

module.exports = cloudinary;
