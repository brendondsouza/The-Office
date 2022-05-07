//ADD EVENT LISTENER TO GET RANDOM QUOTE BUTTON
const rando = document.querySelector('.btn').addEventListener('click', getRandom)

//ADD EVENT LISTENER TO GET INDIVIDUAL CHARACTER QUOTE
const choice = document.querySelector('.character-box')
choice.addEventListener('click', event => {
  const {target} = event
  const {value} = target
  console.log(event)
  console.log(value)
  if(!target.matches('button')){
    return;
  } else {
    getFetch(value)
  }

})

const url = 'https://api.codetabs.com/v1/proxy?quest=https://officeapi.dev/api/quotes'

//IF CHARACTER IS CHOSEN RUN THIS FETCH FUNTION
function getFetch(value){
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        let arr = data.data.filter(x=> x.character._id === value)
        console.log(arr) //[Math.floor(Math.random()*arr.length)])
        console.log(arr[Math.floor(Math.random()*arr.length)])
        const quote = arr[Math.floor(Math.random()*arr.length)]
        document.querySelector('.insertQuote').innerText = `"${quote.content}"`
        document.querySelector('.author').innerText = `- ${quote.character.firstname} ${quote.character.lastname}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }

    //IF RANDOM BUTTON IS CHOSEN RUN THIS FETCH
    function getRandom(){
      fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        let arr = data.data
        //let arr = data.data.filter(x=> x.character._id === value)
        //console.log(arr) //[Math.floor(Math.random()*arr.length)])
        console.log(data.data[Math.floor(Math.random()*arr.length)])
        const quote = arr[Math.floor(Math.random()*arr.length)]
        document.querySelector('.insertQuote').innerText = quote.content
        document.querySelector('.author').innerText = quote.character.firstname + ' ' + quote.character.lastname

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }