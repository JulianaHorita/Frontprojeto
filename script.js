function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  //se tiver light mode adicionar a imagem light
  
 img.setAttribute("src", "./assets/avatar-light.png")
  if (html.classList.contains("light")) {
  } else {
    //   se não, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}  
