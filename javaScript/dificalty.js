
 const btn = document.querySelectorAll("button")

  const selectHandler = (event) => {
                          
    const level = event.target.innerText.toLowerCase()
    localStorage.setItem("level", level)
    window.location.assign("/") 

  }
 btn.forEach((btn => {
 btn.addEventListener("click", selectHandler)
 }))