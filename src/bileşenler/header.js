const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const header2 = document.createElement("div");
  header2.classList.add("header");

  const tarih2 = document.createElement("span");
  tarih2.textContent = tarih;
  tarih2.classList.add("date");
  header2.appendChild(tarih2);

  const baslik2 = document.createElement("h1");
  baslik2.textContent = baslik;
  baslik2.classList.add("h1");
  header2.appendChild(baslik2);

  const yazi2 = document.createElement("span");
  yazi2.textContent = yazi;
  yazi2.classList.add("temp");
  header2.appendChild(yazi2);

  return header2;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  let headerBileseni = Header(
    "Teknoloji Zamanı",
    "11 Kasım 2022",
    "sağdaki yazı"
  );
  const header3 = document.querySelector(secici);
  header3.appendChild(headerBileseni);

  return headerBileseni;
};

export { Header, headerEkleyici };
