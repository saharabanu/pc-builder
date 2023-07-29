const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://pc-builder:NGtuEV0M4owYjtoi@cluster0.2kdey3p.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run(req,res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("components");
    const { productId } = req.query;

    if (req.method === "GET" && productId) {
        const product = await productsCollection.findOne({
          _id: new ObjectId(productId),
        });
        if (product) {
          res.send({ message: "success", status: 200, data: product });
        } else {
          res.status(404).send({ message: "Product not found", status: 404 });
        }
      } else if (req.method === "GET") {
        const products = await productsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: products });
      }
      return productsCollection;
    // Send a ping to confirm a successful connection
    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;