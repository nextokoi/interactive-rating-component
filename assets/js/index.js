let submit = document.getElementById('submit'),
    rating = document.getElementById('rating'),
    thankRating = document.getElementById('thanks-rating'),
    rateSpan = document.getElementById('rate'),
    error = document.getElementById('error'),
    refresh = document.getElementById('refresh')

submit.addEventListener('click', () => {
    let elementActive = document.querySelector('input[name="rating"]:checked')
    if(elementActive) {
        rating.style.display = 'none'
        thankRating.style.display = 'flex'
        rateSpan.innerHTML = elementActive.value
        confetti()
    } else {
        error.style.display = 'block'
    }
})


refresh.addEventListener('click', () => {
    location.reload()
})

function closeAlert(event){
    let element = event.target
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode
    }
    element.parentNode.parentNode.removeChild(element.parentNode)
  }
