# Cibiru Signgage API

Cibiru Signgage adalah sebuah proyek yang bertujuan untuk membuat sebuah company profile serta info grafis tentang fakultas di kampus, yang berisi data jumlah mahasiswa pertahunnya, jumlah capaian, target capaian fakultas, dan informasi lainya. Proyek ini akan menggunakan sebuah website sebagai platformnya, dan akan terdiri dari sebuah dashboard yang dapat diakses oleh pengguna melalui Signgage tersebut.

## Endpoints

Host: https://cibiru-signgage-api.vercel.app

### Laporan Pelaksanaan Program

#### GET /api/laporanPelaksanaanProgram/all
#### GET /api/laporanPelaksanaanProgram/id?id=
#### GET /api/laporanPelaksanaanProgram/kp?kebijakan=&program=

Data hasil laporan pelaksanaan program

**Response**

```json
[
  {
    "K": "Number {kebijakan}",
    "P": "Number {program}",
    "No": "Numbuer {nomor}",
    "Indikator Kinerja": "String {indikator}",
    "Satuan": "String {satuan data}",
    "Target": "String / Number {rencana/target}",
    "Realisasi": "String / Number {realisasi}",
    "Keterangan": "String {tercapai/belum tercapai}"
  }
]
```

## Usage

Untuk menggunakan API ini, cukup kirimkan permintaan ke titik akhir yang sesuai dengan parameter yang diperlukan. Responsnya akan berupa objek JSON yang berisi data yang relevan.
