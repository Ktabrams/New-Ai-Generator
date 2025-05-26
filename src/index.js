
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3bb429560a4tfe3ecf96fae66oed5d7f";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context = "You are a romantic poem expert. You want to write a poem that is short and beautiful. Your mission is to generate a 4-line poem and seperate each line with a <br />. Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' in a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=~${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then((response);

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);