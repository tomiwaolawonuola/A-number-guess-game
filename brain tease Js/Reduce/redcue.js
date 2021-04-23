

// const data = ()=>{

//       let input = document.getElementById('input');

//        fetch('https://api.genderize.io?name=leo')

//         .then((res)=>res.json())



//        .then((data)=>{
           

//     //    data.map(function(info){
//     //        let output = info.text
//     //        console.log(output)
//     //        const fact = document.getElementById('fact')
//     //        fact.textContent = output
//     //    })
//        })
// }


// data()

const form = document.getElementById('form');
let input = document.getElementById('name');
const fact = document.getElementById('fact')
const message = document.getElementById('message');

function template(data) {
//inserting the data into the DOM using insertAdjacentHTML
  fact.insertAdjacentHTML(
    "beforeend",
    `
        <div>
                  <h2> Name: ${data.name} </h2>
                 <p> Gender: <span> ${data.gender} </span></p>
                 <p> Probablity: <span> ${data.probability} </span></p>
                 <p> count: <span> ${data.count} </span></p>
     </div>
`
  );
    setTimeout(function(){
        fact.innerHTML = '';
    
    }, 2000)

}



form.addEventListener('submit', predictGender)

function predictGender(e){

     fetch(`https://api.genderize.io?name=${input.value}`)

        .then((res)=>res.json())

       .then((data)=>{    
           //this is the data 
       console.log(data)
       //I use console.log as to know what the data entails
       template(data);

       })

//if the input value is set to nothing, display message

       if(input.value === ''){
            displayMessage(message)
            fact.style.display = 'none'
       }

       input.value = '';

   
 e.preventDefault()


}


//the functionanlity of displayMessage and when to timeout

function displayMessage (message){
    message.textContent = 'Enter a value';
    setTimeout(function(){
        message.textContent = ''
    }, 1000)

}




