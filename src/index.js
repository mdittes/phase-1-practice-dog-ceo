//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainer = document.querySelector('#dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedsList = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')

let breeds;

// fetch(imgUrl)
// .then(res => res.json())
// .then((dogs) => displayDogs(dogs.message))

// function displayDogs(dog) {
//     dog.forEach((image) => {
//         let newPic = document.createElement('img')
//         newPic.src = image
//         dogContainer.append(newPic)
//     })
// };

fetch(imgUrl)
.then(res => res.json())
.then(dogData => displayDogs(dogData));

const displayDogs = function(dogs) {
    dogs.message.forEach((image) => {
        let newPic = document.createElement('img')
        newPic.src = image
        dogContainer.append(newPic)
    })
}

fetch(breedUrl)
.then(res => res.json())
.then(dogBreeds => {
    breeds = Object.keys(dogBreeds.message);
    addBreeds(breeds)
});

function addBreeds(breeds) {
    for(let breed of breeds) {
        const li = document.createElement('li')
        li.innerText = breed
        breedsList.append(li)

        li.addEventListener('click', (e) => {
            li.style.color = 'blue'
            //could also be e.target.style.color = 'color'
        })
    }
};

breedDropdown.addEventListener('change', (e) => filterBreeds);

function filterBreeds(e) {
    let letter = e.target.value
    let filteredBreeds = breeds.filter((breed) => {
        return breed[0] === letter;
    });
    breedsList.innerHTML = ''
    addBreeds(filteredBreeds)
}










// on page load, fetches images with url provided
// parse as JSON
// adds image elements to DOM forEach image in array
/*
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(res => res.json())
.then((dogImages) => addImages(dogImages.message));

function addImages(dogPics) {
    const dogContainer = document.querySelector('#dog-image-container');
    dogPics.forEach((image) => {
        let newPic = document.createElement('img');
        newPic.src = image;
        dogContainer.append(newPic);
    });
}

//CHALLENGE 2
    // on page load, fetches all dog breeds using breedUrl
    // adds breeds to the page in the <ul> provided in index.html

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(res => res.json())
.then((dogBreeds) => {
    breeds = Object.keys(dogBreeds.message);
    addBreeds(breeds);
});    

const ul = document.querySelector('ul');

function addBreeds(breeds) {
    for (let breed of breeds) {
        const li = document.createElement('li');
        li.textContent = breed;
        li.addEventListener('click', () => {
            li.style.color = "blue"
        });
        ul.appendChild(li);
    }
}

//CHALLENGE 3
    //add javascript so that when user clicks on a <li>
        //the font color of <li> changes (any color!)

//CHALLENGE 4
    //add javascript so user can filter breeds by letter using dropdown



    */