// http://localhost:5000 to add it to mywebsite // https://www.youtube.com/watch?reload=9&v=eg4e-FObyJ8

console.log('It works')
$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')
    /*get value when validate form*/
    var name = $('.name').val()
    var email = $('.email').val()
    var phonenumber = $('.phone number').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    
    if(name.length >= 2) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Name is not valid</div>')
    }
    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      
      statusElm.append('<div>Email is valid</div>')
      console.log('Email is not valid')
    }
    // if(phone number.length > 5 && phone number.includes('@') && phone number.includes('.')) {
    //   statusElm.append('<div>Phone number is valid</div>')
    // } else {
    //   event.preventDefault()
      
    //   statusElm.append('<div>Email is valid</div>')
    //   console.log('Email is not valid')
    // }

    if(message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
  })
})