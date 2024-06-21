const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/react", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
