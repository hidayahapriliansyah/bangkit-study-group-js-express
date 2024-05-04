Ketika mencoba menambah, mengupdate, menghapus data dari data di folder data, maka itu gak akan berpengaruh.
Kenapa? Karena data ini itu static.

Contoh: Ketika request data event berdasarkan username admin2 lalu isi event nya ada 1, harapan kita adalah ketika create 1 data event, ketika request data event lagi maka harus nya ada 2, nah itu bakal tetep 1 karena ketika minta event nya lagi, ngambil data event nya lagi itu dari kode static yang ditulis di events.js

agar simulasi crud bisa dijalankan disarankan pakai library seperti json-server
