button = document.querySelector('.dice');
adviceBox = document.querySelector('.advice');
adviceNumber = document.querySelector('.advice-number')

button.addEventListener('click', async => {
  FetchAdvice().then(advice => {
    const adviceText = advice.slip.advice; // fetched movies
    const adviceID = advice.slip.id;
    adviceBox.textContent = adviceText;
    adviceNumber.textContent = adviceID;
  });
})


async function FetchAdvice(){
  const response = await fetch("https://api.adviceslip.com/advice");
  const advice = await response.json();
  return advice;
}
