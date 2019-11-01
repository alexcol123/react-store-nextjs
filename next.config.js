// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://Alexcol123:Alex1960@reactreserve-9mdxh.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'alexcol123',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dqauiwwap/image/upload',
    STRIPE_SECRET_KEY: '<insert-stripe-secret-key>'
  }
};
