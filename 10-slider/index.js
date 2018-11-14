(()=>{
let elements = document.querySelectorAll('[data-slides]');

elements.forEach(function(element){
	let data = element.getAttribute("data-slides");
	let array = data.split(", ");
	let main = document.createElement("div");
	element.appendChild(main);
	element.classList.add("dataSlides");
	main.classList.add("main");

	let slider = document.createElement("div");
	slider.style.marginLeft = "0px"
	main.appendChild(slider);

	main.addEventListener("click", function(){
		let ml = slider.style.marginLeft;
		let px = parseInt(ml);
		if (px == -300*(array.length-1)){
			slider.style.marginLeft = "0px"
		}
		else 
		{
		slider.style.marginLeft = px - 300 + "px";	
		}
	});
	
	var buttonNext = document.createElement("button");
		buttonNext.innerHTML = "Next";
		buttonNext.classList.add("buttonNext");
		// let data = document.querySelector(".data-slides");
		// console.log(data)
		element.appendChild(buttonNext);
		
	buttonNext.addEventListener("click", function(){
		let ml = slider.style.marginLeft;
		let px = parseInt(ml);
		if (px == -300*(array.length-1)){
			slider.style.marginLeft = "0px"
		}
		else 
		{
		slider.style.marginLeft = px - 300 + "px"}
	})

	var buttonPrev = document.createElement("button");
		buttonPrev.innerHTML = "Prev";
		buttonPrev.classList.add("buttonPrev");
		// let data = document.querySelector(".data-slides");
		// console.log(data)
		element.appendChild(buttonPrev);
		
	buttonPrev.addEventListener("click", function(){
		let ml = slider.style.marginLeft;
		let px = parseInt(ml);
		console.log(-300*(array.length-1));
		console.log(px);
		if (px == 0){
			slider.style.marginLeft = -300*(array.length-1) + "px"
		}
		else 
		{
		slider.style.marginLeft = px - (-300) + "px"}

	})



	slider.classList.add("slider");
	slider.style.width = array.length*300 +"px";
	for (var i = 0; i<array.length; i++) {
		// console.log('ok');
		// console.log(i);
		let page = document.createElement("div");
		page.classList.add("page");
		slider.appendChild(page);
		page.innerHTML = array[i];
	}
})

})();