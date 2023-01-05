// Library
import { MongoClient } from "mongodb";
class ModelHandler {
  constructor(server) {
    this.server = server;
  }

  async connect(auth) {
    this.client = new MongoClient(this.server.data.config.database.auth);

    await this.client.connect();

    this.db = this.client.db('cibiru-signgage');
  }
};

export default ModelHandler;