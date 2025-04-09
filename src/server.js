require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");

const PORT_API = process.env.APP_PORT || 3000;

class Server {
  constructor(app = express()) {
    this.app = app;
    this.middlewares();
    this.database();
    //  this.routes();
    this.initializeServer();
    // this.swagger();
  }
  middlewares() {
    this.app.use(cors({ allowedHeaders: "Content-Type,Authorization" }));
    this.app.use(express.json());
  }

  async database() {
    try {
      await connection
        .authenticate()
        .then(() =>
          console.log("Connection has been established successfully.")
        )
        .catch((err) =>
          console.error("Unable to connect to the database:", err)
        );
    } catch (error) {
      console.error("Database connection failed: ", error);
      throw error;
    }
  }

  initializeServer() {
    this.app.listen(PORT_API, () => {
      console.log(`Server running on port ${PORT_API}`);
    });
  }
}

module.exports = new Server();
