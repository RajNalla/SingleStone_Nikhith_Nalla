import * as loki from 'lokijs';
let db = null;

async function initialiseDB(dbName) {
try {
    db = new loki(dbName);
}catch(e) {
    throw e;    
}
}

async function getDBInstance(count = 0, dbName?) {
    if (db) {
        return db;
    }
    if (count > 0 || !dbName) {
        throw new Error("Failed to initialse DB");
    }
    await initialiseDB(dbName);
    getDBInstance(1);
}

export {initialiseDB, getDBInstance, db}