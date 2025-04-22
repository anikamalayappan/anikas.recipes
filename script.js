let darkmode = localStorage.getItem('darkmode')
const lightDark = document.querySelectorAll('.light-dark')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === 'active') enableDarkMode()

lightDark.forEach(a => {
    a.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== 'active' ? enableDarkMode() : disableDarkMode()
    })})
const hamburger = document.getElementById('hamburger')

const showSidebar = () => {
    const s = document.querySelector('.sidebar')
    s.style.display = "flex"
}

const closeSidebar = () => {
    const s = document.querySelector('.sidebar')
    s.style.display = "none"
}

hamburger.addEventListener("click", () => {
    showSidebar()
})

const x = document.querySelectorAll('.close')

x.forEach(button => {
    button.addEventListener("click", () => {
        closeSidebar()
    })
})