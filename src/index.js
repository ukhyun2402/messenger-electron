import _ from 'lodash';
import './style.css';

function submit(e) {
    e.preventDefault();
    console.log(123123);
}

document.querySelector('#test').addEventListener('click',() => {
    console.log('hello?');
})
// const component = function () {

// }

// document.body.appendChild(component());
