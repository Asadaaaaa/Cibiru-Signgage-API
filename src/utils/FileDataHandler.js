import FS from 'fs-extra';
import YAML from 'js-yaml';

class FileDataHandler {
  resourceLoader() {
    const serverDataPath = './server_data';
    const resourceFolder = './src/resources';
  
    if(!FS.existsSync(serverDataPath)) {
      FS.mkdirSync(serverDataPath);
      FS.copySync(resourceFolder, serverDataPath);
    }
  
    return;
  }

  async getFileData(file, fileType) {
    const serverDataPath = './server_data';
    const filePath = serverDataPath + '/' + file;

    if(!FS.existsSync(serverDataPath)) throw new Error("Directory doesn't exist");
    if(!FS.existsSync(filePath)) throw new Error("File doesn't exist");

    let fileContent = FS.readFileSync(filePath, err => {
      if (err) throw err;
    });
    
    switch(fileType) {
        case "YAML": {
          let objYAML = YAML.load(fileContent);
            
          return objYAML;
        }

        case "JSON": {            
          return JSON.parse(fileContent);
        }

        default: {
          throw new Error("Unable to recognize file type");
        }      
    }
  }

  async saveFileData (data, file, fileType) {
    const serverDataPath = './server_data';
    const filePath = serverDataPath + '/' + file;
    
    if(!FS.existsSync(serverDataPath)) throw new Error("Directory doesn't exist");

    switch(fileType) {
      case "YAML": {
        let strYAML =  YAML.dump(data);

        FS.writeFileSync(filePath, strYAML, err => {
          if (err) console.log("Error writing file:", err);
        });
          
        return;
      }

      case "JSON": {
        let strJSON = JSON.stringify(data, null, 2); 
          
        FS.writeFileSync(filePath, strJSON, err => {
          if (err) console.log("Error writing file:", err);
        });
          
        return;
      }

      default: {
        throw new Error("Unable to recognize file type");
      }
    }
  }
};

export default FileDataHandler;