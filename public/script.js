
const handleNameDisplay = (event) => {
  fetch('/json')
    .then( response => response.json() )
    .then( response => {
      return document.querySelector('.new-text').innerText = `Your name is ${response.name}`
    })
    .catch( error => console.log(error) )
}

const handleSunsetsDisplay = (event) => {
  fetch('/sunsets')
    .then( response => response.json() )
    .then( response => {
      return response.images.forEach( imageUrl => {
        const newImage = document.createElement('IMG');
        newImage.setAttribute('src', `${imageUrl}` );
        newImage.setAttribute('width', '400');
        newImage.setAttribute('height', '250');
        newImage.setAttribute('alt', 'sunset vista');
        document.querySelector('.image-container').appendChild(newImage);
      })
    })
    .catch( error => console.log(error) )
}

document.querySelector('.click-btn').addEventListener('click', handleNameDisplay)

document.querySelector('.sunsets-btn').addEventListener('click', handleSunsetsDisplay)
