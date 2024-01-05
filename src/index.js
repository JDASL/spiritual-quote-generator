function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["The way is not in the sky; the way is in the heart. – Buddha"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteElement = document.querySelector("#quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
