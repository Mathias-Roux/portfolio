// Animation card
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
	card.addEventListener('click', event => {
		card.classList.toggle('widtherCard')
	})
})

// Dark bg extend
const sideBar = document.querySelector('.sideBar')

sideBar.addEventListener('click', event => {
	document.body.classList.toggle('darkMode')
})
