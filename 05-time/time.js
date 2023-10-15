let mode = 'full';

const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('data');
const timeBtn = document.getElementById('time');

function bindMode(name) {
  return function() {
    mode = name
    update()
  }
}
fullBtn.onclick = bindMode('full') 

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time') 


update()
setInterval(update, 1000);

function update(){
	output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString();
    case 'date':
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleTimeString() + ' ' + now.toLocaleDateString();
    default:
      return now.toLocaleTimeString();
  }
}
