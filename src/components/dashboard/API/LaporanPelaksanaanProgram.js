import FileDataHandler from "../../../utils/FileDataHandler.js";

class LaporanPelaksanaanProgram {
  constructor(server, api) {
    api.get('/api/laporanPelaksanaanProgram', async (req, res) => {
      const fileDataHandler = new FileDataHandler();
      
      const data = await fileDataHandler.getFileData('data/laporanPelaksanaanProgram.json', 'JSON');

      res.status(200).json(data);
      return;
    });
  }
};


export default LaporanPelaksanaanProgram;