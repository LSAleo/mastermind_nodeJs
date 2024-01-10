let blue = '#0000FF'
let green = '#00CD1C'
let red = '#FF0000'
let yellow = '#F3FF00'
let gray = '#606060'
let purple = '#CDOOFF'
let color = [red, blue, green, yellow, purple, gray]
let board
let nb_lines
let check_pin
let square2

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
}

function choice_color(){

}

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