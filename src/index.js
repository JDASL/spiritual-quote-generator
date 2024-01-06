function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  console.log(response);
}

function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "0of4a675977824391c9f2t2e3d0a170b";
  let prompt = `User instruction: Generate a spiritual quote about ${instructionInput.value}`;
  let context =
    "You are a wise and spiritual quote expert and love to write about short quotes. Your mission is to generate a one line spiritual quote poem in basic HTML. Make sure to follow the user instructions. Do not include a title to the quote. Sign the quote with `SheCodes AI` inside a </ br> <strong> element at the end of the quote";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteElement = document.querySelector("#quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
