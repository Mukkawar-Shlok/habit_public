const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Shlok69:9QZ9w7GseGwPq4VC@cluster0.6cxx0yf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
