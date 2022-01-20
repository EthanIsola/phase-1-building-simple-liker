const init = () => {
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const inputs = document.body.getElementsByClassName('like');
function addingEventListener(input){
  input.addEventListener('click', function() {
    mimicServerCall()
    .then(function (object) {
      if(object.textContent != "Random server error. Try again."){
        let counter = 0;
        if (input.textContent == `Like! ${EMPTY_HEART}`){
          input.classList.add("activated-heart")
          input.textContent = `Like! ${FULL_HEART}`;
          counter++;
        }
        else{
          input.textContent = `Like! ${EMPTY_HEART}`;
          counter++;
          input.classList.remove("activated-heart")
        }
      }
      console.log(object);
    })
    .catch(function (error) {
      let err = document.getElementById('modal')
      err.classList.remove("hidden")
      setTimeout(() => {
        err.classList.add("hidden")
      }, 3000)
      err.innerHTML = `${error}`
      console.log(err)
    })
  })
}
for (var i = 0 ; i < inputs.length; i++) {
  addingEventListener(inputs[i])
}
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



document.addEventListener('DOMContentLoaded', init);
