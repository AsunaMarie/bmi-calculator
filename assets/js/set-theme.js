const getDarkModeToggle = () => {
    return document.getElementById("toggle-dark-mode")
}

const getDarkModeToggleValue = () => {
    return document.getElementById("toggle-dark-mode").checked
}

const setDarkModeToggleValue = (isChecked) => {
    getDarkModeToggle().checked = isChecked
}

const getTheme = () => {
    return localStorage.getItem("theme")
}

const setTheme = () => {
    if (getDarkModeToggleValue()) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
    else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }
}

getDarkModeToggle().addEventListener("change", () => {
    setTheme()
})

if (getTheme() === "dark") {
    setDarkModeToggleValue(true)
} else {
    setDarkModeToggleValue(false)
}

setTheme()