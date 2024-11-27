# Note IT | Tugas Akhir Pengembangan Aplikasi Web

**NoteIT** adalah aplikasi berbasis _web app_ yang dirancang untuk membantu pengguna mencatat ide, rencana, dan informasi penting dengan mudah. Dengan fitur tasks list yang terintegrasi, pengguna dapat mengatur daftar tugas dengan tenggat waktu yang jelas, memastikan semua pekerjaan terselesaikan tepat waktu. Aplikasi ini cocok untuk individu maupun tim kecil yang ingin menjaga produktivitas dan keteraturan tanpa kerumitan fitur tambahan. Fokus utama adalah kesederhanaan, kemudahan penggunaan, dan efisiensi dalam mencatat dan mengelola tugas sehari-hari.

## Tim pengembang

| No  | Nama                         | NIM                | Jobdesk                              |
| --- | ---------------------------- | ------------------ | ------------------------------------ |
| 1   | Brandon Rafael Lovelyno      | 22/500359/TK/54847 | Front-End Developer & Integration    |
| 2   | Steven Namora Roha S. N      | 22/505930/TK/55405 | UI/UX Designer & Front-End Developer |
| 3   | Marchel Rianra Glendrikho S. | 22/494013/TK/54157 | Back-End Developer & Integration     |
| 4   | Gabriel Syailendra Fernandez | 22/503450/TK/55009 | Back-End Developer & Integration     |
| 5   | Gabriella Eileen Gultom      | 22/503523/TK/55109 | Front-End Developer                  |

## Links

- **Front-End Deployment** : [Front-End Website](https://note-it-fe.vercel.app/)
- **Back-End Deployment** : [Back-End Website](https://note-it-be-zeta.vercel.app)
- **Figma Design** : [Figma Desain](https://www.figma.com/design/OWsAwdikljTOvgVEnQZD3Q/Desain-PAW?node-id=0-1&t=8VVIs1HcwGmWD9yh-1)
- **Video Presentation** : [Video Presentasi](https://drive.google.com/file/d/1EvjXQdPjF67bhIpd8YvZaIxjsBjlUPnE/view?usp=sharing)
- **PPT Presentation** : [PPT Note-IT](https://www.canva.com/design/DAGXj9EXjcU/shzw9hqgetAHDpnpd7I5Ig/edit?utm_content=DAGXj9EXjcU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

# Development Setup

## Prerequisites  
Pastikan perangkat Anda memiliki prasyarat berikut:  
- **Node.js** versi 16.15 atau lebih tinggi  
- **npm** versi 7 atau lebih tinggi  

## Menjalankan Repository  

### Back-End  
1. Clone repository Back-End
   ```bash  
   git clone https://github.com/BrandonRafaelLovelyno/NoteIT-be
   cd NoteIT-be
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Konfigurasi Environment : 
Ada file `.env` yang harus dibuat.

```env
MONGO_URI=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
JWT_SECRET_KEY=

PORT=5000
```
**Sesuaikan dengan key yang telah anda punya**

5. Untuk menjalankan aplikasi di development mode:
  ```bash
   npm run dev
```
> Server akan berjalan pada port:5000

```arduino
http://localhost:5000  
```
