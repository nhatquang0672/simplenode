const express = require("express");
const cors = require('cors')
;
const app = express();
const sked = require("./api/sked");


app.use(cors());
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World! We are the champion!!!')
  })
app.use("/sked/", sked);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
