import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("✅ Database connected successfully");
    })

    mongoose.connection.on('error',(err) => {
        console.error("❌ Database connection error:", err);
    })

    mongoose.connection.on('disconnected',() => {
        console.log("⚠️ Database disconnected");
    })

    // Set connection options for better reliability
    const options = {
        serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 30 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0, // Disable mongoose buffering
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 30 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4, // Use IPv4, skip trying IPv6
        maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
        retryWrites: true,
        retryReads: true
    };

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, options);
        console.log("🚀 MongoDB connection established with enhanced reliability");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
        // Don't exit process, let the application handle reconnection
        setTimeout(() => {
            console.log("🔄 Attempting to reconnect to MongoDB...");
            connectDB();
        }, 5000);
    }

}

export default connectDB;
