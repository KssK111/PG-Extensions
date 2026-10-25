const table = document.getElementsByTagName("table")[0].children[0]
for (const element of table.children) {
  if (element.classList[0] === "seprow")
    continue
  const zglaszanie = element.children[2]
  if (element.children[0].tagName === "TH") {
    let kod = document.createElement("th")
    kod.classList.add("tcol")
    kod.textContent = "Kod"
    zglaszanie.after(kod)
  } else {
    const zg = zglaszanie.children[0]
    let kod = document.createElement("a")
    kod.textContent = "Kod"
    kod.href = zg.href.replace("p=submit", "p=viewcode")
    zglaszanie.after(kod)
  }
}
