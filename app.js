//Server
const express = require("express");
const cors = require("cors");
const newsRoutes = require("./routes/news");


const app = express();

app.set("view engine", "ejs");
app.get("views");

app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());


app.use(newsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is Running");
});
