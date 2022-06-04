import gsap from 'gsap'

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


const technoLines = [...document.querySelectorAll('.paragraph p')]

technoLines.forEach(line => {
	gsap.set(line, {
		y: '100%',
		opacity: 0
	})
	gsap.to(line, {
		y: '0%',
		opacity: 1,
		duration: 0.7,
		ease: 'Power3.In'
	})
})
