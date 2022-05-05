
//document.querySelector('select').addEventListener('change', getFetch)

const url = 'https://api.codetabs.com/v1/proxy?quest=https://officeapi.dev/api/characters'

 //const character =  document.querySelector('select').value
  //const url = 'https://api.codetabs.com/v1/proxy?quest=https://officeapi.dev/api/characters/' + character

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)


        let arr = []
        data.data.forEach(item=> arr.push(`${item.firstname} ${item.lastname}-${item._id}`))

        // for(let i = 0; i<data.data.length; i++){
        //   arr[i] = `${data.data[i].firstname} ${data.data[i].lastname} ${data.data[i]._id}`
        // } 
        arr.map(i => i.split('-'))
        console.log(arr);
       
        // // let id = data.
        //   const obj = data.firstname; //turn message into an object 
        //   const charcterArray = Object.keys(obj.firstname) //turn object into array of keys 
        //   console.log(charcterArray);
        //   // for(let i = 0; i < characterArray.length; i++){
        //   //   const option = document.createElement('option') // create option
        //   //   option.value = charArray[i] //give option a value 
        //   //   option.innerText = charArray[i] // addinner text to each value 
        //   //   select.appendChild(option) // append option to the select dropdown 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


