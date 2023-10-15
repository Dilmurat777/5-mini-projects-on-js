const resultElement = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
const submitBtn = document.getElementById('submit')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

plusBtn.onclick = function() {
	action = '+'
}
minusBtn.onclick = function() {
	action = '-'
}
multiplyBtn.onclick = function() {
	action = '*'
}
divisionBtn.onclick = function() {
	action = '/'
}

function printResult(result) {
	result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
	resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	if(actionSymbol == '+') {
		return num1 + num2
	}else if(actionSymbol == '-') {
		return num1 - num2
	}else if(actionSymbol == '*') {
		return num1 * num2
	}else if(actionSymbol == '/') {
		return num1 / num2
	}
}

submitBtn.onclick = function() {
	const result = computeNumbersWithAction(input1, input2, action)
	printResult(result)

}

const fullAge = 40
const currentYear = 2023
const birthYear = 1983

const isFullAge = currentYear - birthYear <= fullAge
console.log(isFullAge);
