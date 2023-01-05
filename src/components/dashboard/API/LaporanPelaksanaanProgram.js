import { ObjectId } from "mongodb";

class LaporanPelaksanaanProgram {
  constructor(server, api) {
    this.server = server;
    this.api = api;

    api.get('/api/laporanPelaksanaanProgram/:getBy', async (req, res) => {
      const getBy = req.params.getBy;
      
      switch(getBy) {
        case "all": {
          this.getAll(req, res);
          return;
        }
        
        case "id": {
          this.getId(req, res);
          return;
        }

        case "kp": {
          this.getKebijakanProgram(req, res);
          return;
        }

        default: {
          res.status(404).send("Bad Request");
          return;
        }
      }
    });
  }

  async getAll(req, res) {
    const data = await (await this.server.model.db.collection('data-laporan-pelaksanaan-program').find({})).toArray();

    res.status(200).json(data);
  }

  async getId(req, res) {
    const id = req.query.id;

    const data = await (await this.server.model.db.collection('data-laporan-pelaksanaan-program').find(ObjectId(id))).toArray();

    res.status(200).json(data);
  }

  async getKebijakanProgram(req, res) {
    const kebijakan = req.query.kebijakan;
    const program = req.query.program;

    const data = await (await this.server.model.db.collection('data-laporan-pelaksanaan-program').find({K: Number(kebijakan), P: Number(program)})).toArray();

    res.status(200).json(data);
  }
};


export default LaporanPelaksanaanProgram;