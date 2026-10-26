let sel = selector => document.querySelector(selector)
if ("Logowanie" === sel("#leftside > div:nth-child(1) > div").textContent) {
  let get = i => sel(`#leftside > div > span.menuitemnolink > form > input:nth-child(${i})`)
  get(1).value = "indeks"
  get(3).value = "hasło"
  get(5).click()
}
