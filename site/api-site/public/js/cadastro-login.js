let progress = document.getElementById("progressbar");
  let totalheight = document.body.scrollHeight - window.innerHeight;
  window.innerHeight;



  const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

