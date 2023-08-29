import { createSlice } from "@reduxjs/toolkit";

export const slicer = createSlice({
  name: "slice",
  initialState: {
    carousel: [
      {
        imgLink: "http://www.karakaya86.com.tr/Dosya/Manset/158a1d13150fc6.jpg",
        title: "Kataforez Kaplama Ünitesi",
      },
      {
        imgLink: "http://www.karakaya86.com.tr/Dosya/Manset/158a1cf59bc9bd.jpg",
        title: "Alüminyum Pasivasyon Prosesi",
      },
      {
        imgLink: "http://www.karakaya86.com.tr/Dosya/Manset/158a1d00523680.jpg",
        title: "Kalite Kontrol",
      },
      {
        imgLink: "http://www.karakaya86.com.tr/Dosya/Manset/158a1d14a7774f.jpg",
        title: "Labaratuvar",
      },
      {
        imgLink: "http://www.karakaya86.com.tr/Dosya/Manset/16331ac3aecc66.png",
        title: "Kapsam",
      },
    ],
    prosses: [
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f741726c3.jpg",
        title: "Alkali Çinko Ve Nikel Kaplama",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f88626a50.jpg",
        title: "Çinko Fosfat Kaplama",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f96bbf2bb.jpg",
        title: "Aliminyum Pasivasyon",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1fb3594f70.jpg",
        title: "Elektrostatik Toz Boya Kaplama",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1fc48e3473.jpg",
        title: "Karartma",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1fd8374223.jpg",
        title: "Kataforez Kaplama",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a201c9ef5fc.jpg",
        title: "Oksilan",
      },
    ],
    units: [
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f17d6ddf5.jpg",
        title: "Vibrasyon",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f29b7e640.jpg",
        title: "Kumlama",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a1f3e6f3f7f.jpg",
        title: "Arıtma",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a690f23475c.jpg",
        title: "Kaplama Sökme",
      },
      {
        imgLink:
          "http://www.karakaya86.com.tr/Dosya/Hizmetler/158a2c2aed0f82.jpg",
        title: "Hidrojen Giderme",
      },
    ],
    news: [
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Haberler/160879c4e523a8.jpg",
        title: "Üretici Firma İş Birliği",
        date: "27.04.2021",
        new: "Üretici Firma İş Birliği",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Haberler/15a02f0fc9eea6.jpg",
        title: "Ahiler Kalkınma Ajansı",
        date: "08.11.2017",
        new: "Ahiler Kalkınma Ajansı",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Haberler/159e745aef3c48.jpg",
        title: "GTÜ Rektörünün Ziyareti",
        date: "18.10.2017",
        new: "GOSB KATILIMCILARI VE GTÜ REKTÖRÜ KARAKAYA 86 DA BİR ARAYA GELDİ.",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Haberler/159e742e719213.jpg",
        title: "GOSB İş Adamları",
        date: "18.10.2017",
        new: "GOSB KATILIMCILARI VE GTÜ REKTÖRÜ KARAKAYA 86 DA BİR ARAYA GELDİ.",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Haberler/158a448dc0ffe9.jpg",
        title: "30. Yılımızda 4. Fabrikamız",
        date: "02.07.2016",
        new: "Açılışa Kocaeli Büyükşehir Belediye Başkanı İbrahim Karaosmanoğlu, Gebze Belediye Başkanı Adnan Köşker, Eflani Belediye Başkanı İbrahim Ertuğrul Başta Olmak Üzere, Siyasi Parti Temsilcileri, Ülkemiz Otomotiv Sektörünün Önde Gelen Temsilcileri Katıldı. Açılış Konuşmasını Yapan Hasan Karakaya “Sektörde 30 Yılı Geride Bıraktığımız Bu Yılda, Bu Başarımızda Bizimle Olan Dostlarıma, Aileme Ve Çalışma Arkadaşlarıma Çok Teşekkür Ediyorum” Dedi",
      },
    ],
    referances: [
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21735d3d88.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21749a6166.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a217565f75b.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a217623bc1d.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2176eaf674.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2177a1c858.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2178732de5.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2179290620.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21833462cc.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2183d2d318.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21848567a6.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2185387137.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2187144fe6.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2187fc2b4a.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a218898f243.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a218a5950f9.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a218bb35cac.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a218da8e0b2.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a218fa72964.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219065535a.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2191b410f0.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21940442be.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2194fcd269.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21960bf0e0.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a2196ec3bd2.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219912a5ef.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219a835db5.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219bbd88d3.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219da2dd7e.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a219e8e8755.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21a002dcc9.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21a0ca6feb.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21a197f5cd.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21a2e02839.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/158a21740032da.jpg",
      },
      {
        imgUrl:
          "http://www.karakaya86.com.tr/Dosya/Referanslar/15a02f62cb4c1c.jpg",
      },
    ],
  },
});

export default slicer.reducer;
