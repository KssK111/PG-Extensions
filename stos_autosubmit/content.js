let get = id => document.getElementById(id)
let create = tag => document.createElement(tag)
let button = create("button")
button.textContent = "Prześlij szybciej"
get("form").after(button)
button.onclick = () => {
  let input = create("input")
  input.type = "file"
  input.multiple = true
  input.onchange = () => {
    let filetable = get("filetable")
    for (let file of filetable.children)
      file.children[2].children[1].click()
    const event = {
      target: {
        files: input.files,
        fl_table: filetable
      }
    }
    FL_OnAddFiles(event)
    get("commit").click()
  }
  input.click()
}
