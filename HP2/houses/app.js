function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

// const result = getRandomItem(array);
// console.log(result);

function submitData(form) {
    console.log('form', form.name.value, form.age.value);
    if (!form.name.value || !form.age.value) {
        return false;
    }

    console.log('form', form.name.value || form.age.value);
    const element= document.getElementsByClassName("dva")[0];
    element.classList.add('show')

    const result = document.getElementById('result')
    result.innerHTML = getRandomItem(array);
}