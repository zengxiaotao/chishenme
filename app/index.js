require('./css/index.css')
var $ = require('jquery')

var foods = require('./js/data.js')

var btn = document.querySelector('button'),
	food = document.querySelector('span'),
	len = foods.length,
	running = false

function randomFood() {
	var index = Math.floor(len * Math.random())
	food.innerHTML = foods[index]
	addInfo(index)
}

function addInfo(index) {
	var bodyWidth = $('body').width(),
		bodyHeight = $('body').height(),
		newSpan = $('<span class="show">' + foods[index] + '</span>')
		newSpan.css({
			left: bodyWidth * Math.random(),
			top: bodyHeight * Math.random()
		})
		.appendTo($('body'))
		.fadeOut(1500)
	setTimeout(function() {
		newSpan.remove()
	}, 1500)
}

function choose() {
	running = !running
	btn.innerHTML = running ? '决定好了' : '不行，换一个'
	var chooseFood = setInterval(function() {
		randomFood()
		if (!running) {
			clearInterval(chooseFood)
		}
	}, 100)

}


btn.addEventListener('click', choose)