import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//https://github.com/Rodrigo-B-R/Clase_TC2005B.503 

const app = express()
const PORT = 5000

app.use(express.static("public/templates"))
app.use("/stylesheet", express.static("public/stylesheet"))
app.use("/images", express.static( "public/images"))



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
