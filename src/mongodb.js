const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const authenticator = mongoose.model("authenticator", LoginSchema);

module.exports = authenticator;
