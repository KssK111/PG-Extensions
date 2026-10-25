let get = id => document.getElementById(id)
let create = tag => document.createElement(tag)
let button = create("button")
button.textContent = "Prześlij szybciej"
get("form").after(button)
button.onclick = () => {
  let input = create("input")
  input.type = "file"
  input.multiple = true
  input.onchange = async () => {
    let filetable = get("filetable")
    for (let file of filetable.children)
      file.children[2].children[1].click()
    const files = [...input.files]
    const buffers = await Promise.all(files.map(f => f.arrayBuffer()))
    for (let i = 0; i < files.length; i++) {
      const event = {
        target: {
          fl_file: files[i],
          fl_table: filetable,
          result: buffers[i]
        }
      }
      FL_OnLoad(event)
    }
    get("commit").click()
  }
  input.click()
}
