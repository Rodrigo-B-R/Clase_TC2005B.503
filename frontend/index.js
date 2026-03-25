import express from "express";
import path from "path";
import { fileURLToPath } from "url";



const app = express()
const PORT = 5000

app.use(express.static("public/templates"))
app.use("/stylesheet", express.static("public/stylesheet"))
app.use("/images", express.static( "public/images"))



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
