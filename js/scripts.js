async function FetchAdvice(){
  const response = await fetch("https://api.adviceslip.com/advice");
  const advice = await response.json();
  return advice;
}
FetchAdvice().then(advice => {
  console.log(advice.slip.advice); // fetched movies
});
