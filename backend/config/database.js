import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const URI = process.env.MONGODB_URL;
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

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
