function changeText() {
  const texts = ["Hello!", "Welcome to SIT725", "You clicked the button!", "JavaScript works!", "Nice job!"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  document.getElementById("heading").innerHTML = texts[randomIndex];
}
