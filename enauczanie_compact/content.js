const url = document.location.href
if (url.includes("2025/course")) {
  const obs = new MutationObserver(() => {
    const element = document.getElementById("collapsesections")
    if (element) {
      if (element.ariaExpanded === "true") {
        element.click()
        if (element.ariaExpanded === "false") {
          obs.disconnect()
        }
      } else {
        obs.disconnect()
      }
    }
  })
  obs.observe(document.documentElement, { childList: true, subtree: true })
}
