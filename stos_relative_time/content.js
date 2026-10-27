const table = document.getElementsByTagName("table")[0].children[0]
for (const element of table.children) {
  if (element.classList[0] !== "seprow" && element.children[0].tagName !== "TH") {
    let date = element.children[element.children.length - 1]
    if (date.textContent) {
      const diff_ms = new Date(date.textContent) - new Date()
      const diff = Math.ceil(diff_ms / 60000)
      date.textContent = Math.abs(diff) > 240 ? `${Math.ceil(diff / 60)}h` : `${diff} min`
      date.style.backgroundColor = diff > 15 ? "green" : diff > 0 ? "yellow" : "red"
    }
  }
}
