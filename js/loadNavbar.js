document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector("#navbar-container").innerHTML = content;
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then((response) => response.text())
        .then((content) => {
            document.querySelector("#footer").innerHTML = content;
        })
        .catch((error) => console.error(error));
});