const MOTO_CARD = [
    {
        img: "./Assets/moto1.png",
        paragraph: "O câmbio de 6 marchas da Voltz EV1 traz maior confiança e performance, tornando as subidas de marcha mais leves e as reduções mais suaves! ",
        price: "R$619,90",
        head: "Scooter Voltz E1",
    },
    {
        img: "./Assets/moto2.png",
        paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        price: "R$819.90",
        head: "Moto CB 500x",
    },
];

const liEls = document.querySelectorAll(".carrosselCards li");
const modalEl = document.querySelector("#modal");
let index = 0;

function show(increase) {
    index= index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({behavior: "smooth"});
}

setInterval(() => {
    if (index === liEls.length - 1) {
      show(index - 2);
    } else {
      show(index + 1);
    }
  }, 5050);
  
  function showModal(index) {
    modalEl.innerHTML = "";
    modalEl.innerHTML = ` 
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./Assets/botaofechar.png" alt="close-button" />
      </button>
      <h1>
      ${MOTO_CARD[index].head}
      </h1>
      <img src="${MOTO_CARD[index].img}" alt="" />
      <p>
      ${MOTO_CARD[index].paragraph}
      </p>
      <span>${MOTO_CARD[index].price}</span>
      <button ">Quero Assinar!</button>
    </div>
    `;
    modalEl.style.visibility = "visible";
  }
  
  function closeModal() {
    modalEl.style.visibility = "hidden";
  }