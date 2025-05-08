const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/chat_app';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
    // Create a test document
    return mongoose.connection.db.collection('test').insertOne({ test: 'Hello MongoDB!' });
  })
  .then(() => {
    console.log('Successfully inserted test document.');
    // Clean up the test document
    return mongoose.connection.db.collection('test').deleteOne({ test: 'Hello MongoDB!' });
  })
  .then(() => {
    console.log('Successfully cleaned up test document.');
    process.exit(0);
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }); 