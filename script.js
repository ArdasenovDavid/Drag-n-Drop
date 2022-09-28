const block = document.querySelector('.hold')
const area = document.querySelector('.place-to-drop')
const ticket = document.querySelector('.ticket')
function move(eve){


		
	orX = eve.pageX - 50
	orY = eve.pageY - 50

	block.style.left = orX + 'px'
	block.style.top =  orY + 'px'

}

block.ondragstart = function () {
	return false
}


block.addEventListener('mousedown', () => {
	block.style.animation = 'whb 0.3s forwards'
	window.addEventListener('mousemove', move)
})
window.addEventListener('mouseup', () => {
	block.style.animation = 'whl 0.3s forwards'
	let coordX = window.getComputedStyle(area).left
	let areaX = parseInt(coordX.substring(0, coordX.length - 2))
	let coordY = window.getComputedStyle(area).top
	let areaY = parseInt(coordY.substring(0, coordY.length - 2))
	console.log(areaX)
	console.log(orX)
	window.removeEventListener('mousemove', move)
	if (areaX < orX && orX  < areaX + 80 && areaY < orY && orY  < areaY + 80) {
		console.log('hi')
		ticket.style.display = 'block'
		ticket.style.animation = 'rot 3s forwards'
		block.style.animation = 'hide 1s forwards'
		
	}
})

