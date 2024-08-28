**Hospital Automation System - Frontend** <br><br>
Bu proje, Vue ve TypeScript kullanılarak geliştirilmiş bir hastane otomasyon sisteminin frontend kısmını içerir. Bu uygulama, doktorlar ve hastalar için listeleme ve ekleme işlemleri sağlar ve backend API ile iletişim kurar.<br><br><br><br>
**İçindekiler**<br>
Proje Tanımı<br>
Kurulum<br>
Kullanım<br>
API İletişimi<br><br>

**Proje Tanımı**<br>
Bu proje, hastane otomasyon sistemi için bir frontend arayüz sağlar. Doktorlar ve hastalar için listeleme ve ekleme işlemleri yapılabilir. Uygulama, backend API ile iletişim kurar ve Vue.js framework'ü kullanılarak geliştirilmiştir.<br><br>
**Kurulum**<br>
--Gereksinimler--<br>
Node.js <br>
Vue CLI<br><br>

**1.Proje Bağımlılıklarını Yükleyin:** <br>
cd path/to/hospital-frontend<br>
npm install<br><br>
**2.Uygulamayı Başlatın:** <br>
npm run serve<br><br>

Frontend uygulaması, doktor ve hasta bilgilerini listeleyen ve yeni doktor/hasta ekleyen sayfalar içerir. <br>
--Doktorlar--<br>
Ana Sayfa: Doktorların listesini görüntüler.<br>
Doktor Ekleme: Yeni bir doktor eklemek için form sunar.<br><br>
--Hastalar--<br>
Hastalar Sayfası: Hastaların listesini görüntüler.<br>
Hasta Ekleme: Yeni bir hasta eklemek için form sunar.<br><br>

**API İletişimi**<br>
Uygulama, backend API ile iletişim kurarak veri alır ve gönderir. API endpoint'leri aşağıdaki gibidir:<br><br>

--Doktorlar--<br>
GET /doctors - Doktorların listesini alır.<br>
POST /doctors - Yeni bir doktor ekler. Gerekli alanlar: name, specialty.<br>
PUT /doctors/:id - Mevcut bir doktoru günceller. Gerekli alanlar: name, specialty.<br>
DELETE /doctors/:id - Bir doktoru siler.<br><br>
--Hastalar--<br>
GET /patients - Hastaların listesini alır.<br>
POST /patients - Yeni bir hasta ekler. Gerekli alanlar: name, age.<br>
PUT /patients/:id - Mevcut bir hastayı günceller. Gerekli alanlar: name, age.<br>
DELETE /patients/:id - Bir hastayı siler.<br><br>
