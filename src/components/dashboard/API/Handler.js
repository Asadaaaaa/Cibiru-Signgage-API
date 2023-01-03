import LaporanPelaksanaanProgram from "./LaporanPelaksanaanProgram.js";

class Handler {
  constructor(server, api) {
    new LaporanPelaksanaanProgram(server, api);
  }
}

export default Handler;