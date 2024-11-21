console.log("Hello, world!");

document.addEventListener("DOMContentLoaded", function () {
  // Any code you write in here will run when the page is loaded.
  console.log("The page is loaded!");

  // Get the button in index.html
  const button = document.getElementById("say-hi");

  if (button) {
    // Add an event listener to the button
    button.addEventListener("click", function () {
      console.log("Hi!");
    });
  }
});
