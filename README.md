# Harpia - Lüks Saat & Mücevherat E-Ticaret Projesi

Harpia, lüks saat ve mücevher satışı için tasarlanmış, modern, kullanıcı dostu ve tamamen responsive (mobil uyumlu) bir e-ticaret web sitesi projesidir. Bu proje, hem müşterilerin alışveriş yapabileceği bir ön yüzü (frontend) hem de site yöneticilerinin verileri kontrol edebileceği kapsamlı bir yönetim panelini (admin dashboard) içerir.

![Harpia Banner](assets/img/light-logo.png)

## 🚀 Özellikler

### 🛒 Kullanıcı Arayüzü (Frontend)
* **Modern ve Responsive Tasarım:** Bootstrap 5 altyapısı ile tüm cihazlarda kusursuz görünüm.
* **Karanlık/Aydınlık Mod (Dark/Light Mode):** Kullanıcı tercihine göre tema değiştirme özelliği.
* **Dinamik Ana Sayfa:** Slider manşet alanı, öne çıkan kategoriler ve indirimli ürün vitrinleri.
* **Ürün Yönetimi:**
    * Ürün listeleme sayfası.
    * Detaylı ürün inceleme sayfası (fotoğraf galerisi, beden seçimi).
* **Alışveriş Sepeti:** JavaScript ve LocalStorage kullanılarak oluşturulmuş, tarayıcı kapansa bile verileri tutan sepet sistemi.
* **Diğer Sayfalar:** Hakkımızda, İletişim, Blog, Giriş Yap, Kayıt Ol.
* **Çerez Bildirimi:** Kullanıcı deneyimi için özelleştirilebilir çerez uyarı barı.

### 🛠 Yönetim Paneli (Admin Dashboard)
* **Dashboard:** Satış grafikleri (Chart.js), günlük ciro, sipariş ve üye istatistikleri.
* **Ürün Yönetimi:** Ürün listeleme, stok durumu görüntüleme ve yeni ürün ekleme arayüzü.
* **Sipariş Takibi:** Gelen siparişlerin durumu (hazırlanıyor, kargoda vb.) ve detayları.
* **Müşteri Yönetimi:** Kayıtlı kullanıcıların listesi ve durumları.
* **Kampanya Yönetimi:** İndirim kuponları oluşturma ve vitrin görsellerini yönetme.
* **Ayarlar:** Site genel ayarları, SEO ve ödeme yapılandırma arayüzleri.

## 💻 Kullanılan Teknolojiler

* **HTML5:** Semantik yapı.
* **CSS3:** Özelleştirilmiş stiller ve `vars.css` ile değişken kullanımı.
* **JavaScript (ES6+):** DOM manipülasyonu, sepet mantığı ve tema kontrolü.
* **Bootstrap 5:** Grid sistemi ve hazır bileşenler (Modal, Navbar, vb.).
* **FontAwesome 6 & Unicons:** İkon setleri.
* **Chart.js:** Admin panelindeki grafikler için.
* **Google Fonts:** Space Grotesk ve Inter font aileleri.

## 📂 Proje Yapısı

```bash
harpia.io/
├── admin/                  # Yönetim paneli dosyaları
│   ├── index.html          # Dashboard ana sayfası
│   ├── products.html       # Ürün yönetimi
│   ├── order.html          # Siparişler
│   └── ...
├── assets/                 # Stil, Script ve Görsel dosyaları
│   ├── css/                # style.css, vars.css
│   ├── img/                # Ürün, banner ve logo görselleri
│   └── js/                 # script.js (Ana fonksiyonlar)
├── products/               # Ürün listeleme alt klasörü
├── index.html              # Ana sayfa
├── about.html              # Hakkımızda
├── cart.html               # Sepet sayfası
├── contact.html            # İletişim
└── ...
```
## ⚙️ Kurulum ve Kullanım
Bu proje statik web teknolojileri (HTML/CSS/JS) ile geliştirildiği için herhangi bir sunucu kurulumu gerektirmez.

Projeyi bilgisayarınıza indirin veya klonlayın.

Ana dizindeki index.html dosyasına çift tıklayarak tarayıcınızda açın.

Admin Paneli İçin: Tarayıcıda admin/index.html veya admin/login.html dosyasını açın.

Not: Admin giriş simülasyonu için e-posta: admin@harpia.com, şifre: 123456 olarak ayarlanmıştır (JavaScript tarafında).


##  📷 Ekran Görüntüleri
<img width="1901" height="983" alt="Ekran görüntüsü 2025-12-07 143639" src="https://github.com/user-attachments/assets/ebd0464e-5b78-42df-bfdc-10dfd2c174cf" />
<img width="1900" height="1032" alt="Ekran görüntüsü 2025-12-07 143709" src="https://github.com/user-attachments/assets/d916b726-a975-405c-834d-043c075242e9" />
<img width="1900" height="1029" alt="Ekran görüntüsü 2025-12-07 143739" src="https://github.com/user-attachments/assets/2d12c6d3-a165-426b-aaf1-9fe12472d6e4" />
<img width="1918" height="1029" alt="Ekran görüntüsü 2025-12-07 143813" src="https://github.com/user-attachments/assets/d4f31107-ddaa-467e-8d6a-5345c60fc263" />
<img width="1915" height="1026" alt="Ekran görüntüsü 2025-12-07 143842" src="https://github.com/user-attachments/assets/c165bc0c-1292-4365-a6d9-7b96f68ac444" />
<img width="1916" height="1030" alt="Ekran görüntüsü 2025-12-07 143856" src="https://github.com/user-attachments/assets/98a1b13f-341e-42ee-a611-00278b97d3fc" />
<img width="1919" height="1030" alt="Ekran görüntüsü 2025-12-07 143909" src="https://github.com/user-attachments/assets/6fcc80fb-e06b-4adc-8636-506ab4521d13" />
<img width="1919" height="1009" alt="image" src="https://github.com/user-attachments/assets/49fd0f18-2528-4e0a-8ae4-e9d18cd8dbe5"/>


## 🤝 Katkıda Bulunma
Bu projeyi forklayın.

Yeni bir özellik dalı oluşturun (git checkout -b feature/YeniOzellik).

Değişikliklerinizi commit edin (git commit -m 'Yeni özellik eklendi').

Dalınızı push edin (git push origin feature/YeniOzellik).

Bir Pull Request oluşturun.

## 📄 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.
