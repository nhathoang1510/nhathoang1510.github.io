
window.addEventListener('load', function(){
    generate()
})

function generate(){
    let right = document.querySelector('.right_content')
    let strRight = ``
    let count = "11"
    for(let i = 1; i <= 4; i++ ){
        let row = `<div class="row">`
        for(let j = 1; j <= 5; j++){
            count = i.toString() + j
            if(j == 1){
                row += `<div class="item black" position='${count}'"></div>`
            }else{
                row += `<div class="item red" position='${count}'"></div>`
            }
        }
        row += `</div>`

        strRight += row
    }

    right.innerHTML = strRight;
}

function setColor(position){
   
    if(position == 100){
        generate()
    }else{
        document.querySelector(`div [position='${position}']`).style.backgroundColor = "green"
    }

}

var start = document.querySelector(".start")

start.addEventListener('click', function(){

    let y = document.querySelector('.input_x')
    let x = document.querySelector('.input_y')

    let value = parseInt( x.value + y.value )
    setColor(value)
})

