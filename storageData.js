localStorage.setItem('name', 'Kyle')

sessionStorage.setItem('name', 'Kyle')

document.cookie = 'name=Kyle'

document.cookie = `name=Kyle; expires=${new Date(9999, 0, 1).toUTCString()}`

localStorage.setItem('name', 'Kyle')
localStorage.setItem('lastName', 'Smith')

sessionStorage.setItem('name', 'Kyle')
sessionStorage.setItem('lastName', 'Smith')

document.cookie = `name=Kyle; expires=${new Date(9999, 0, 1).toUTCString()}`
document.cookie = `lastName=Smith; expires=${new Date(9999, 0, 1).toUTCString()}`