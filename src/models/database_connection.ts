import mongoose from 'mongoose';
import dotenv from "dotenv";
import { upsertPermission } from '../internalServices/permissionInstance';
import models from '.';

dotenv.config();
let { mongodb_host, mongodb_db, mongodb_db_auth_db, mongodb_user, mongodb_pwd, upsertPermissionOnStart } = process.env

mongoose.set("strictQuery", false);

export const connect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://" + mongodb_host + "/" + mongodb_db, {
        authSource: mongodb_db_auth_db,
        user: mongodb_user,
        pass: mongodb_pwd,
        bufferCommands: true,
        minPoolSize: 25,
        readPreference: "secondaryPreferred"
    });
};

mongoose.connection.on("connected", () => {
    console.info("Mongoose default connection open to database");
    //collection must created before using with session.
    models.attendanceList.createCollection();
    models.attendanceStudent.createCollection();
    if (upsertPermissionOnStart == "true") {
        upsertPermission();
    }
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
    console.info("Mongoose default connection error: " + err);
    setTimeout(() => connect(), 5000);
});

mongoose.connection.on("reconnected", () => {
    console.info("Mongoose reconnected!");
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
    console.info("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.info("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});