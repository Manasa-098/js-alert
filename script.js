

function register() {
    let container = document.getElementById('container')
    let input = document.getElementById('input').value
    let error = document.getElementById('error')
    if (input.length == 0) {
        error.innerHTML = 'please fill the below field!!!'
        container.classList.remove('d-none')
        container.classList.add('error')
        setTimeout(() => {
            container.classList.add('d-none')
            container.classList.remove('error')

        }, 3000)
    }
    else {

        container.classList.remove('d-none')
        container.classList.add('alert')
        setTimeout(() => {
            container.classList.add('d-none')
            container.classList.remove('alert')

        }, 3000)
    }

}
