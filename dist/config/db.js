"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDBConnection = createDBConnection;
const mongoose_1 = require("mongoose");
async function createDBConnection(MONGO_URI) {
    if (!MONGO_URI) {
        throw new Error(`Invalid Mongo URI. Please provide a correct Mongo URI.`);
    }
    try {
        const db = await (0, mongoose_1.connect)(MONGO_URI);
        console.log(` MongoDB Connection Established Successfully.`);
        return db;
    }
    catch (error) {
        console.error(`[Error]: while creating DB connection`, error);
        throw error;
    }
}
