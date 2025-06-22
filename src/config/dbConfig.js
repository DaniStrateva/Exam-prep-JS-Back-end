import mongoose from "mongoose";


async function initDatabase{
const dbUrl = `mongodb://localhost:27017`;
//database name depends on the project database
const dbName = 'test_db';

await mongoose.connect(dbUrl, {dbName});
}

export default initDatabase;