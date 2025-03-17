function generatePoem(event) {
  event.preventDefault();

  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 4,
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instrunctionsInput = document.querySelector("#user-instructions");
  let apiKey = "84cf7eo6b70eb739dfa7d76a00dbfabt";
  let context =
    "You are a romantic poem expert and love to write short poems.Your mission is to generate a 5 line poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions.Do not include a tittle. Sign at the bottom inside <strong>'Ai generated'<strong/>.";
  let prompt = `User instructions: Generate short and very sweet poems in English about ${"instrunctionsInput.value"}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
