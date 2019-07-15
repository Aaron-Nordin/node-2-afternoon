const express = require("express");
const app = express();
const PORT = 3001;
const msgCtrl = require("./controllers/messages_controller");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));
app.listen(PORT, () => console.log(`${PORT} is watching you`));

app.post("/api/messages", msgCtrl.create);
app.get("/api/messages", msgCtrl.read);
app.put("/api/messages/:id", msgCtrl.update);
app.delete("/api/messages/:id", msgCtrl.delete);
