var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

/*---------------------------------- Redefinir Senha ---------------------------------*/

