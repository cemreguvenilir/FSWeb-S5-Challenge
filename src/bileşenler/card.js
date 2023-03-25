import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const kart = document.createElement("div");
  kart.classList.add("card");

  const anaBaslik = document.createElement("div");
  anaBaslik.classList.add("headline");
  anaBaslik.textContent = makale.anabaslik;
  kart.appendChild(anaBaslik);

  const yazar = document.createElement("div");
  yazar.classList.add("author");
  kart.appendChild(yazar);

  const foto = document.createElement("div");
  foto.classList.add("img-container");
  yazar.appendChild(foto);

  const foto2 = document.createElement("img");
  foto2.classList.add("img");
  foto2.src = makale.yazarFoto;
  foto.appendChild(foto2);

  const yazarSpan = document.createElement("span");
  yazarSpan.textContent = makale.yazarAdi + " tarafından";
  yazar.appendChild(yazarSpan);

  kart.addEventListener("click", function (e) {
    console.log(makale.anabaslik);
  });
  return kart;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get(`http://localhost:5001/api/makaleler`).then((response) => {
    for (let i in response.data.makaleler) {
      response.data.makaleler[i].forEach(function (makale) {
        document.querySelector(secici).appendChild(Card(makale));
      });
    }
  });
};

export { Card, cardEkleyici };
