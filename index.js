import express from "express";
import router from "./routes/routes.js";

i = 9;

const app = express();
app.use(express.json());
app.use(router);

app.listen(8080, () => {
    console.log("Servidor corriendo en puerto 8080");
});