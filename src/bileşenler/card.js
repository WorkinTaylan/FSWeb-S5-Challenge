import axios from "axios";
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

const Card = (makale) => {
  const cardDiv= document.createElement("div");
  cardDiv.classList.add("card");

  const headLineDiv= document.createElement("div");
  headLineDiv.classList.add("headline");
  headLineDiv.textContent=makale.anabaslik;
  cardDiv.appendChild(headLineDiv);

  const author= document.createElement("div");
  author.classList.add("author");
  cardDiv.appendChild(author);

  const imgCont= document.createElement("div");
  imgCont.classList.add("img-container");
  author.appendChild(imgCont);

  const img= document.createElement("img");
  img.src= makale.yazarFoto;
  imgCont.appendChild(img);

  const span= document.createElement("span");
  span.textContent = makale.yazarAdi +'tarafından';
  author.appendChild(span);
  
  cardDiv.addEventListener("click", ()=>{
    console.log(makale.anabaslik);
  })

  return cardDiv;
}
// GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
const cardEkleyici = (secici) => {
  const cardAdd= document.querySelector(secici);


  axios({
		method: 'get',
		url: 'http://localhost:5001/api/makaleler',
	})
	.then(function (response) {
		console.log(response)
    let x=response.data.makaleler;
    for(let key in x){
      for(let i=0; i<x[key].length; i++){
        cardAdd.appendChild(Card(x[key][i]));
      }
    }
		
	})
  //.catch eklemeye çalışmayı unutma!!
}

export { Card, cardEkleyici }
