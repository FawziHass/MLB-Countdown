const countdown = document.querySelector(".countdown");

const launchDate = new Date("Jul 17, 2018").getTime();

const intvl = setInterval(() => {
	const now = new Date().getTime();

	const distance = launchDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	countdown.innerHTML = `
		<div>${days}<span class="spant">Days</span></div>
		<div>${hours}<span class="spant">Hours</span></div>
		<div>${mins}<span class="spant">Minutes</span></div>
		<div>${seconds}<span class="spant">Seconds</span></div> 
	`;

	if(distance < 0 ){
		clearInterval(intvl);
		countdown.style.color = "#17a2b8";
		countdown.innerHTML = "Game Started";
	}



}, 1000);