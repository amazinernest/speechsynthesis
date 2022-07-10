const synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;

  const yellText = `${fName} `;

  document.querySelector("#placeToYell").innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
