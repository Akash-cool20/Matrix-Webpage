//collecting the form data and logging in the console

//select the form element
const form = document.querySelector(".contact-form");


//do the following on form submission
form.addEventListener('submit', event => {
    event.preventDefault();
    
    //extract the data on form submission
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const instituteInput = document.getElementById("institution");
    const messageInput = document.getElementById("message");


    //making a formData object
    const formData = {
        name : nameInput.value,
        email: emailInput.value, 
        phone: phoneInput.value,
        institute: instituteInput.value,
        message: messageInput.value
    };

    //logging the data
    console.log(formData);

    //we can now use fetchAPI to post data to the desired server
    //we can also display successfull data sent message after a
    //successfull post request

    //reset the inputs 
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    instituteInput.value = "";
    messageInput.value = "";

});



// team section script 

//cardCollection is the collection of all the cards, each card (I call it "parent") has two childs => [image, blank card behind image]

let cardCollection = document.getElementsbyClassName('col');
cardCollection.forEach(parent => {
  let firstChild = parent.childNodes[0], secondChild = parent.childNodes[1];
  firstChild.addEventListener("mouseover", e => {
    //replace the actual class name
    e.target.classList.add("fill_here....")
  })
  firstChild.addEventListener("mouseout", e => {
    e.target.classList.remove("fill_here....")
  })
  
  secondChild.addEventListener("mouseover", e => {
    e.target.classList.add("fill_here....")
  })
  secondChild.addEventListener("mouseout", e => {
    e.target.classList.remove("fill_here....")
  })
})