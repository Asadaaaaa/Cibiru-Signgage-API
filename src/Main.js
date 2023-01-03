import FileDataHandler from './utils/FileDataHandler.js';
import DasboardAPI from './components/dashboard/API/Handler.js';

// Library
import Express, { json } from 'express';

class Server {
  server = {
    config: null
  }

  constructor() {
    this.sendLogs("Starting...");
    
    this.init();
  }

  async init() {
    this.sendLogs("Loading Data...");

    const fileDataHandler = new FileDataHandler();

    fileDataHandler.resourceLoader();
    this.server.config = await fileDataHandler.getFileData('config.yml', 'YAML');

    this.sendLogs("Starting API...")
    this.run();
  }

  run() {
    const api = Express();
    
    api.use(json());
    new DasboardAPI(this, api);
    
    api.listen(this.server.config.http.port, () => {
      this.sendLogs("Started, Listening " + this.server.config.http.port);
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