function showMessage() {
    var confirmation = confirm("Eta pora, nao esperava");

    if (confirmation) {
        window.location.href = "https://www.tiktok.com/@forrozeiroz/video/7309491197029010694?_r=1&_t=8iDlXcqtkur";
    }
}

window.addEventListener("DOMContentLoaded", function() {
    var buttonNo = document.querySelector(".buttonNo");
    var originalTransform = buttonNo.style.transform;
    var isTransformed = false;
  
    buttonNo.addEventListener("click", function() {
      if (isTransformed) {
        buttonNo.style.transform = originalTransform;
      } else {
        buttonNo.style.transform = "translateY(200px)";
      }
      isTransformed = !isTransformed;
    });
  });
  