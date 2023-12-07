import './style.css'
import { displayResult, clearInput } from './validations';

const container = document.querySelector('#app')

container.innerHTML = `
<form id="calculator">
<input type="text" id="result" autocomplete="off" name="result" readonly>
<div id="buttons">
<input type="button" class="button" id="seven" value="7">
<input type="button" class="button" id="eight" value="8">
<input type="button" class="button" id="nine" value="9">
<input type="button" class="button" id="add" value="+">

<input type="button" class="button" id="four" value="4">
<input type="button" class="button" id="five" value="5">
<input type="button" class="button" id="six" value="6">
<input type="button" class="button" id="subtract" value="-">

<input type="button" class="button" id="one" value="1">
<input type="button" class="button" id="two" value="2">
<input type="button" class="button" id="three" value="3">
<input type="button" class="button" id="multiply" value="*">

<input type="button" class="button" id="zero" value="0">
<input type="reset" class="button" id="clear" value="C">
<input type="button" class="button" id="equals" value="=">
<input type="button" class="button" id="divide" value="/">
</form>
`

const displayOutput = (e) =>{
    if(e.target.classList.contains('button')){
         const result = container.querySelector('#result');
         displayResult(e)
         clearInput(e)
         if(e.target.value === '=') return 
        const value = e.target.value
        result.value += value
}
}

const init =()=>{
  container.addEventListener("click", displayOutput)
}
init()
