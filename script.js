function togglemode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute(
      "src",
      "https://raw.githubusercontent.com/21Kave/projetozero/main/Assets/Avatar2.png"
    )
  } else {
    img.setAttribute(
      "src",
      "https://raw.githubusercontent.com/21Kave/projetozero/main/Assets/Avatar.png"
    )
  }
}