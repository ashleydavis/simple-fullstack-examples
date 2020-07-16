const express = require('express')
const mongodb = require('mongodb');
const port = 3000;

//
// This function is the main entry point for the backend.
//
async function main() {

    //
    // Connect to the database.
    //
    const dbHost = process.env.DBHOST || "mongodb://localhost:27017";
    const client = await mongodb.MongoClient.connect(dbHost);
    const db = client.db("simple-fullstack-example-test-db");
    const collectionName = "__simple_fullstack_example_test_collection__";
    const collection = db.collection(collectionName);

    //
    // Adds some test data to our database.
    //
    // A real HTTP server won't have this... we just need a quick
    // way to get some test data in there that we can work with.
    //
    // Comment this out if you already have data in your database.
    //
    await seedDatabaseWithTestData(db, collectionName, collection);

    const app = express();

    //
    // Serve static files from the "public" sub-directory.
    //
    app.use(express.static("public"));
    
    //
    // Example REST API via HTTP GET.
    //
    app.get("/my-rest-api", (req, res) => {
        // Find data from our database.
        collection.find().toArray() // Opps, don't forget about pagination if you put this into production!
            .then(documents => {
                res.json(documents); // Return the data to the browser.
            })
            .catch(err => {
                console.error("Failed to get documents from the database.");
                console.error(err && err.stack || err);
                res.sendStatus(500); // Return error code to the browser.
            });
    });
    
    //
    // Start the web server.
    //
    app.listen(port, () => {
        console.log(`Point your web browser at http://localhost:${port}`);
    });
}

//
// Starts the backend.
//
main()
    .then(() => {
        console.log("Server online.");
    })
    .catch(err => {
        console.error("Server failed to start.");
        console.error(err && err.stack || err);
    });

//
// Adds some test data to our test database.
//
async function seedDatabaseWithTestData(db, collectionName, collection) {
    await dropCollection(db, collectionName);
    await collection.insertMany([
        {
            msg: "Item 1",
        },
        {
            msg: "Item 2",
        },
        {
            msg: "Item 3",
        },
    ]);
}

//
// Helper function to check if a MongoDB collection exists.
//
async function collectionExists(db, collectionName) {
    const collectionNames = await db.listCollections().toArray();
    return collectionNames.some(coll => coll.name == collectionName);
}

//
// Helper function to drop a MonogDB collection.
//
async function dropCollection(db, collectionName) {
    if (await collectionExists(db, collectionName)) { // Have to check for existance first, otherwise MongoDB gives us an error.
        await db.collection(collectionName).drop(); // Drop existing collection, not only if it exists.
    }
}

