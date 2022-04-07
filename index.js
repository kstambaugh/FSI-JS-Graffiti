let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name')
for(x in dogName){
    dogName[x].style.textAlign = "left"
}


let flip = document.getElementsByClassName("img")
flip.rotate(180)

