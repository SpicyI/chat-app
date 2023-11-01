const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const resp = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "ad4654e2-8a63-4dd7-bb1d-78d38425e0cd"}}
        );
        return res.status(resp.status).json(resp.data);
  } catch (error) {
    return res.status(error.status).json(error.data)
  }
});

app.listen(3001);