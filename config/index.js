module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/instagram',
    // "mongodb+srv://instaclone:why5BOLE@cluster0-vpx6n.mongodb.net/test?retryWrites=true&w=majority",
    secret: process.env.SECRET || 'CodingIsCool'
  }