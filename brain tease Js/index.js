

const form = document.getElementById('form');

const remaining = document.getElementById('remaining')
const input = document.getElementById('input')

const message = document.getElementById('message')

let  count = 3

const reset = document.getElementById('reset')

let resetGame = true

form.addEventListener('submit',(e)=>{
      
    inputValue = input.value
    if(inputValue === ''){
        message.textContent = 'enter a valid number'
        count--;
        
    } else if(inputValue % 5 === 0){
             message.textContent = 'fizz buzz'
    }else{
        message.textContent = 'try again'
    }

   

    // inputValue = parseInt(input.value)

    // if(inputValue % 3 === 0 && inputValue % 5 === 0) {
    //    message.textContent = 'fizz buzz'
    // }

    // else if(inputValue === 0) {
    //      console.log('hello')
    //      message.textContent = 'enter a  valid number'
    // }

 
    // else{
    //     message.textContent ='wrong value'
    //     count--;
    // }

    // if(message.textContent === 'game over'){
    //     console.log('game over')
    // }

    e.preventDefault()

    input.value = ''
   
     remaining.textContent = count
    if(count  < 0){
        remaining.textContent = 'game over'
        
    }

    if(remaining.textContent === 'game over'){
        input.disabled = true;
    }

   




});


reset.addEventListener('click', function(){
    input.value = '';
    message.textContent = '';
    
      if(resetGame){
        // remaining.textContent = 3
        input.disabled = false;
        remaining.textContent = ''
      }
       
    
});





