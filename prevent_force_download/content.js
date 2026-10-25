addEventListener('click', e => {
  if (e.target instanceof HTMLAnchorElement) {
    e.target.href = e.target.href.replace("forcedownload=1", "forcedownload=0")
  }
})
