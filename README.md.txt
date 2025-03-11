# Breaking News API

Bu proje tamamen eğitim ve kişisel gelişim amacıyla yapılmış bir çalışmadır. Ticari bir amaç gütmemektedir. Sadece yazılım geliştirme sürecinde bilgi ve deneyim kazanmak amacıyla geliştirilmiştir.
Katkı sağlamak ve geliştirmek için etkileşimde bulunabilirsiniz.

Bu README dosyası, projenin kurulumunu, kullanımını ve kodun önemli kısımlarını ayrıntılı olarak açıklar. Umarım faydalı olur! 
Hazırlayan: Batuhan Çolak İletişim: batuhancolk@gmail.com || www.batuhancolk.com

## Proje Açıklaması
Bu proje, bir haber sitesinden son dakika haberlerini çekmek ve bu haberleri bir API aracılığıyla sunmak için geliştirilmiştir. 
Node.Js ile yazılmıştır ve EJS şablon motorunu kullanarak kullanıcıya görsel bir arayüz sağlar.
Haberler, API üzerinden JSON formatında sağlanırken, kullanıcılar HTML üzerinden haber başlıklarını ve içeriklerini görebilirler. 
Axios ve Cheerio kullanılmıştır.

## Özellikler
**Son dakika haberlerini listeleme:** Kullanıcılar, son dakika haberlerini /breaking_news endpoint'inden görebilirler.
**Haber detayı görüntüleme:** Her bir haberin detaylarına tıklanarak, haberin içeriği /breaking_news/:title endpoint'inde görüntülenebilir.
**Dinamik tarih gösterimi:** Uygulama, güncel tarihi kullanıcıya gösterir.
**Paylaşım butonları:** Facebook, Twitter ve WhatsApp üzerinden haberleri paylaşmak için butonlar içerir.

## Kullanılan Teknolojiler
- **Node.js: Sunucu tarafı programlama için.**
- **Express.js: Web framework'ü.**
- **Axios: HTTP istekleri göndermek için.**
- **Cheerio: HTML parsing ve scraping işlemleri için.**
- **EJS: Şablon motoru, dinamik HTML render için.**
- **Bootstrap: Kullanıcı arayüzü için.**


## API Kullanımı
	## Son Dakika Haberleri
- **Endpoint: /breaking_news**
- **Yöntem: GET**
- **Açıklama: Bu endpoint, son dakika haberlerini JSON formatında döndürür.** 
	## Haber Detayı
- **Endpoint: /breaking_news/:title**
- **Yöntem: GET**
- **Açıklama: Bu endpoint, haberin detaylı içeriğini sunar. Kullanıcı, 
haber başlığına tıkladığında, haberin detaylarını bu endpoint üzerinden görüntüler.** 

## Proje Yapısı
```
├── app.js              # Express.js sunucu başlangıcı
├── routes/             # Uygulama yönlendirmeleri
│   └── news.js         # Haberlerle ilgili yönlendirmeler
├── src/                # Web scraping ve veri çekme işlemleri
│   └── data.js         # Web scraping fonksiyonları
├── views/              # EJS şablon dosyaları
│   ├── new.ejs         # Son dakika haberlerinin listelendiği sayfa
│   └── newsContent.ejs # Haber içeriğinin görüntülendiği sayfa
├── package.json        # Proje bağımlılıkları
└── README.md           # Proje açıklaması
```

## Kurulum Adımları
1. **Depoyu Kopyalayın**


2. **Bağımlılıkları Yükleyin**
   ```sh
   npm install
   ```

5. **Sunucuyu Başlatın**
   ```sh
   node app.js
   ```

- Sunucu, varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

Batuhan Çolak İletişim: batuhancolk@gmail.com || www.batuhancolk.com

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır.