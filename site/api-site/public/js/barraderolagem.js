let progress = document.getElementById("progressbar");
  let totalheight = document.body.scrollHeight - window.innerHeight;
  window.innerHeight;
  window.onscroll = function () {
    let progressHeigth = (window.pageYOffset / totalheight) * 100;
    progress.style.height = progressHeigth + "%";
  };

 