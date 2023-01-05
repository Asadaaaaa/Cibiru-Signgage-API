import Config from './resources/Config.js';
import ModelHandler from './models/ModelHandler.js';
import DasboardAPI from './components/dashboard/API/Handler.js';

// Library
import Express, { json } from 'express';

class Server {
  data = {
    config: null
  }

  constructor() {
    this.sendLogs("Starting...");
    
    this.init();
  }

  async init() {
    this.sendLogs("Loading Data...");

    this.data.config = Config;

    this.model = new ModelHandler(this);
    await this.model.connect();

    this.sendLogs("Starting API...")
    this.run();
  }

  run() {
    const api = Express();
    
    api.use(json());
    new DasboardAPI(this, api);
    
    api.listen(this.data.config.port, () => {
      this.sendLogs("Started, Listening " + this.data.config.port);
    });
  }

  sendLogs(text) {
    let date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
    let currentDate = "[" + date.getDate() + "/" 
        + (date.getMonth()+1)  + "/" 
        + date.getFullYear() + "|"  
        + date.getHours() + ":"  
        + date.getMinutes() + ":" 
        + date.getSeconds() + "]";

    console.log("\n", currentDate + ": " + text);
  }
};

new Server();