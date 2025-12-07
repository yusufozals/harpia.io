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
