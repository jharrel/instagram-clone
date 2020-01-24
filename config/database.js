const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true, //Add this here!!!
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('An error has occurred', err));

// const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true })
//   .then(() => console.log('Connected To Database'))
//   .catch((err) => console.error('An Error Has Occured', err));

module.exports = db;