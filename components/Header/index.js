// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const data = [
    date,
    lambda,
    temp
]

const headerContainer = document.querySelector('.headerContainer')

data.forEach(array => {
    
    headerContainer.appendChild(Header(array.time, array.lambda, array.degrees));
})




function Header(time, lambda, degrees) {



//Add Elements
const header = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temp = document.createElement('span')
 
//Organize Elements
header.appendChild(date)
header.appendChild(title)
header.appendChild(temp)

//Add Classes
header.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

//Add Text Content
 date.textContent = time
 title.textContent = lambda
 temp.textContent = degrees
 
return header;
}
