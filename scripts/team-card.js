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
