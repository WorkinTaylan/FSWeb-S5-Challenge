import axios from 'axios';

//const tab= ["javascript", "bootstrap", "teknoloji"]
// GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

const Tablar = (konu) => {

  const TopicDiv = document.createElement("div");
  TopicDiv.classList.add("topics");

  konu.forEach((item,i)=>{
    item=document.createElement("div");
    item.setAttribute("class", "tab");
    item.textContent=konu[i];
    TopicDiv.appendChild(item);
  });
//İlk versiyonda yaptığım yol //
  /*const javascriptTab=document.createElement("div");
  javascriptTab.classList.add("tab");
  TopicDiv.appendChild(javascriptTab);

  const bootstrapTab=document.createElement("div");
  bootstrapTab.classList.add("tab");
  TopicDiv.appendChild(bootstrapTab);

  const teknolojiTab=document.createElement("div");
  teknolojiTab.classList.add("tab");
  TopicDiv.appendChild(teknolojiTab);
  
  const jquery=document.createElement("div");
  jquery.classList.add("tab");
  TopicDiv.appendChild(jquery);
  const nodejs=document.createElement("div");
  nodejs.classList.add("tab");
  TopicDiv.appendChild(nodejs);
  
  javascriptTab.textContent=konu[0];
  bootstrapTab.textContent=konu[1];
  teknolojiTab.textContent=konu[2];
  jquery.textContent=konu[3];
  nodejs.textContent=konu[4];*/
  
 

  return TopicDiv;
  
}

console.log(Tablar(['javascript', 'bootstrap', 'teknoloji', 'jquery', 'node.js']))


  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

const tabEkleyici = (secici) => {

  const secTab= document.querySelector(secici);

  axios({
		method: 'get',
		url: 'http://localhost:5001/api/konular',
	})
	.then(function (response) {
		console.log(response)
		secTab.appendChild(Tablar(response.data.konular))
	})
	
}




export { Tablar, tabEkleyici }
