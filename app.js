let currentFilm = "cig";

document.querySelector(".arrowRight").addEventListener("click", function () {
  if (currentFilm === "cig") {
    currentFilm = "happy";
    document.querySelector(".film").setAttribute("href", "./images/smile.mp4");
    document
      .querySelector("#video")
      .setAttribute("src", "./images/smile_hero.mp4");
    document.querySelector("#video").play();
    document.querySelector(".film_title").textContent = "SMILE.";
    document.querySelector(".presenting_title").textContent =
      "PRESENTING: Smile.";
    document
      .querySelector(".hero__footer__thumbnail")
      .setAttribute("src", "./images/smile_Moment.jpg");
  } else if (currentFilm === "happy") {
    currentFilm = "cig";
    document.querySelector(".film").setAttribute("href", "./images/cig.mp4");
    document
      .querySelector("#video")
      .setAttribute("src", "./images/hero_vid.mp4");
    document.querySelector("#video").play();
    document.querySelector(".film_title").textContent = "CIG.";
    document.querySelector(".presenting_title").textContent =
      "PRESENTING: Cig.";
    document
      .querySelector(".hero__footer__thumbnail")
      .setAttribute("src", "./images/cig_thumbnail.jpg");
  }
});
