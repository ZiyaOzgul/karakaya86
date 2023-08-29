import React from "react";

function KurumsalPage() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-96 bg-kurumsal bg-no-repeat bg-cover bg-center bg-opacity-70 flex items-end justify-end">
        <div className="absolute bottom-1/4 right-16">
          <div className="relative flex items-center justify-center">
            <h1 className="absolute bottom-0 right-1/2 font-bold text-9xl text-red-400 opacity-60">
              Kurumsal
            </h1>
            <h1 className="font-bold text-6xl text-white z-10 pr-10">
              Kurumsal
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-start mt-4">
        <div className="w-11/12 h-20 bg-red-500 flex items-center justify-start ">
          <h1 className="mx-12 text-2xl font-bold text-white">Kurumsal</h1>
        </div>
        <div className="w-11/12 h-auto flex flex-col items-start justify-start mt-1">
          <p className="mt-6 text-lg font-medium mr-2">Tarihçe:</p>
          <p className="mt-4 text-base font-normal">
            İlk kurulduğu günden itibaren Müşteri Memnuniyeti ilkesi ile yola
            çıkan firmamız;
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">1986 </i>
            yılında İstanbul Kartal’da Elektrolize Çinko Kaplama faaliyeti ile
            çalışma hayatına başlamıştır…
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">1997 </i> yılında yine Kartal’da,
            Türkiye’deki ilk Fason Çalışan Kataforez Hattını kurarak
            Müşterilerine hizmet vermeye devam etmiştir…
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2003 </i> yılında, Müşterilerine daha iyi
            hizmet sunmak amacıyla yatırım çalışmalarını başlatmıştır.
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2004 </i>
            yılında, Gebze’nin Mollafenari Köyünde 11.000 m² ‘lik alan üzerine
            1.550 m² ‘lik kapalı alanda Fabrikasını kurmuş, faaliyetlerini
            sürdürmeye devam etmiştir…
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2005 </i>
            yılında, Elektrostatik Toz Boya Hattını kurmuş, zamanla Müşteri
            talepleri doğrultusunda; Alkali Çinko ve Çinko Nikel, Çinko Fosfat,
            Oxlan Kaplama, Vibrasyon, Kromat Kaplama, Yaş Boya ve Kumlama
            hizmetlerini de vermek üzere yatırımlarını arttırmıştır.
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2009 </i>
            yılında Hendek Şubemizin açılışı yapılarak sırasıyla; Kataforez, Toz
            Boya, Alkali Çinko Hatlarımız ve Kumlama prosesimiz devreye
            alınmıştır...
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2009 </i>
            yılında Hendek Şubemizin açılışı yapılarak sırasıyla; Kataforez, Toz
            Boya, Alkali Çinko Hatlarımız ve Kumlama prosesimiz devreye
            alınmıştır...
          </p>
          <p className="mt-4 text-base font-normal">
            <i className="font-medium">2013 </i>
            Yılında Aksaray Şubemizin açılışı yapılmış; Kataforez ve Mercedes
            Şase hatlarımız devreye alınmıştır..
          </p>
          <p className="mt-4 text-base font-normal">
            <i>2015 </i>
            yılında Gebze Organize Sanayi Bölgesinde -hali hazırda hizmet
            verdiğimiz- 10.000 m² ‘lik alan üzerine 10.000 m² ‘lik kapalı alanı
            bulunan tesisimiz kurulmuş ve Merkez Fabrikamız olarak
            Müşterilerimize hizmet sunmaya devam etmektedir…
          </p>
          <p className="mt-4 text-base font-medium">
            Toplamda 1 merkez fabrika ve 3 şubemiz de yaklaşık 350 çalışanımız
            ile birlikte KARAKAYA86 ailesi olarak 30 yıllık tecrübemize
            dayanarak müşterilerimize kaliteli hizmet sunmaya devam etmekteyiz.
          </p>
          <a
            href="http://www.karakaya86.com.tr/files/2018-STRATEJIK%20PLAN.pdf"
            className="text-red-600 text-lg font-medium mt-4 mb-6 hover:text-red-700 ease-in-out duration-500"
          >
            2018 Stratejik Plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default KurumsalPage;
