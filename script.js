let blue = '#0000FF'
let green = '#00CD1C'
let red = '#FF0000'
let yellow = '#F3FF00'
let gray = '#606060'
let purple = '#CD00FF'
let color = [red, blue, green, yellow, purple, gray]
let board
let nb_lines
let check_pin
let square2
let selected_color = null

game_space()

function game_space(){
    let new_div = document.createElement('div')
    new_div.style.border = "3px solid black"
    new_div.style.height = "516px"
    new_div.style.width = "300px"
    document.body.appendChild(new_div)
    for (let i = 0; i < 10; i++) {
        let square = document.createElement("div")
        square.style.border = "1px solid black"
        square.style.height = "50px"
        square.style.width = "300px"
        square.style.display = "flex"
        square.className = 'square'
        new_div.appendChild(square)

        for (let j = 0; j < 5; j++) {
            square2 = document.createElement("div")
            square2.style.border = "1px solid black"
            square2.style.height = "50px"
            square2.style.width = "60px"
            // square2.style.backgroundColor = j > 0 ? color[j-1] : ''
            square2.className = "square"
            square.appendChild(square2)
        }
    }
    document.querySelectorAll('.square').forEach((square, index) => {
        square.addEventListener('click', (el) => {
            if ((index + 1) % 5 !== 4 && (index + 2) % 5 !== 4 && (index + 3) % 5 !== 4 && index % 5 !== 4 && (index + 4) % 5 !== 4 && selected_color) {
                el.target.style.backgroundColor = selected_color
                selected_color = null
            }
        })
    })
}

choice_color()

function choice_color(){
    for (let b = 0; b < 6; b++) {
        let color_button = document.createElement("button")
        color_button.classList.add("color_palet")
        color_button.style.backgroundColor = color[b]
        color_button.style.height = "50px"
        color_button.style.width = "60px"
        document.body.appendChild(color_button)

        color_button.addEventListener('click', () => {
            selected_color = color[b]
        })
    }
}

document.querySelectorAll('.color_palet').forEach((button)=> {
    button.addEventListener('click', (el) => {
        let selection_color = el.target.style.backgroundColor
        console.log(selection_color)
    })
})

function check(){

}

function defeat(){

}

function victory(){

}

function random_color(square2){

    let stock_color = []

    for(let c = 0; c < 4; c++){
        let rand = Math.floor(Math.random() * color.length)
        let value = color[rand]
        square2.style.backgroundColor = color[value]
        stock_color.push(value)
    }
    return stock_color
}

let generate_color = random_color(square2)
console.log(generate_color)