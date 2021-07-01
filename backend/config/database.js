import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const URI_PRODUCTION = process.env.MONGODB_URI_PRODUCTION;
    const URI_DEV = process.env.MONGODB_URI_DEVELOPMENT;
    // if (process.env.NODE_ENV === 'production') {

    mongoose.connect(URI_PRODUCTION, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
  } 
  // else {
  //   mongoose.connect(URI_DEV, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true
  // });
  // }

    const db = mongoose.connection;
    // database connection event
    db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
