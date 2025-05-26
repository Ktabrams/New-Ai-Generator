
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
  let apiKey = "678ata03f1eobe6565f0009f45ba1d99";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context ="You are a romantic poem expert. You want to write a poem that is short and beautiful. Your mission is to generate a 4-line poem and seperate each line with a <br />. Make sure to follow the user instructions. And sign the end of the poem with 'SheCodes AI' in a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=~${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
};

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);