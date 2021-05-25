window.addEventListener("DOMContentLoaded", function () {
  // 1秒後に実行
  setTimeout(() => {
    let heroText = document.getElementsByClassName("hero_text");

    heroText[0].classList.add("-visible");
  }, 1000);
});
