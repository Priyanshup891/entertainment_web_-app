const epxress = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");


const app = epxress();
require("dotenv").config();

app.use(cors());
app.use(epxress.json());

app.use("/api/auth", userRoutes);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("DB connection succesfully");
}).catch((error) => {
    console.log(error.message);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is started on ${process.env.PORT}`);
})