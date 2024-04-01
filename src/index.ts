import express from "express";

const app = express();
const PORT = process.env.PORT;


app.use("*", (req,res) =>{
    res.status(404).json({error:"Not Found"})
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT: http://localhost:${PORT}`)
})