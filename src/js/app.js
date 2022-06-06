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


const technoLines = [...document.querySelectorAll('.paragraph p')];

technoLines.forEach(line => {
	gsap.set(line, {
		y: '100%'
	});
	gsap.to(line, {
		y: '0%',
		duration: 0.7,
		ease: 'Power3.In'
	});
});

const names = [...document.querySelectorAll('.title__inner-name .inner')];

names.forEach(name => {
	gsap.set(name, {
		y: '100%'
	});
	gsap.to(name, {
		y: '0%',
		duration: 0.7,
		ease: 'Power3.In'
	});
});


const bio = document.querySelector('.bio > .inner')

gsap.set(bio, {
	y: '100%'
})
gsap.to(bio, {
	y: '0%',
	duration: 0.7,
	ease: 'Power3.In'
})


const links = [...document.querySelectorAll('.socials-list li a > .inner')];

links.forEach(link => {
	gsap.set(link, {
		y: '100%'
	});
	gsap.to(link, {
		y: '0%',
		duration: 0.7,
		ease: 'Power3.In'
	});
});

