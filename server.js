const app = require("./app");
const { errorHandler } = require("./middleware/globalErrorHandler");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

/*
MiddleWare
*/
app.use(errorHandler)


// database connected 
async function databaseConnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/job-portal');
        console.log("database connect");
    } catch (error) {
        errorHandler(error);
    }
}

databaseConnect()

//Global errorHandler 


// default route 
app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to job portal" })
});

// wrong route
app.get("*", (req, res) => {
    res.status(400).json({ message: "NO ROUTE FOUND" })
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `);
})

