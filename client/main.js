const complimentBtn = document.getElementById("complimentButton")

const form = document.querySelector('form')

const list = document.querySelector('ul')


const display_sets = array => {
    list.innerHTML = ""
    array.forEach(object => {
        let listItem = document.createElement('li')
        listItem.textContent = object.set_name
        list.appendChild(listItem)
    })
}


const getCompliment = (event) => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = (event) => {
    axios.get("http://localhost:4004/api/fortune/")
    .then(res => {
        const result = res.data;
        alert(result);
    })       
         .catch(err => {
        console.log(err.response.data);
    })
};

const createNote = (event) => {
    event.preventDefault()
    const inputField = document.querySelector('.createNote')
    console.log(inputField.value)
    let positive = {
        set_name: inputField.value
    }
    axios.post("http://localhost:4004/api/positive", positive)
        .then((res) => {
            display_sets(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
};

const delete_set = (event) => {
    axios.delete(`http://localhost:4004/api/positive/`)
        .then((res) => {
            display_sets(res.data)
        })
        .catch(err => {
            console.log(err.response.data);
        })
    };

    function create_positive(set) {
        const positive_set = document.createElement('div')
        positive_set.classList.add('set-card')
    
        positive_set.innerHTML = `
        <p class="set-title">${set.set_name}</p>
        <button onclick="delete_set(${set.id})">delete</button>
        <form class="edit-form" onsubmit="edit_set(event, ${set.id})">
            <input type="text" name="edit_magic_set" class="edit-magic-set-${set.id}">
            <button type="submit" value="submit">Edit</button>
        </form>
        `
        //make an event listner here
        list.appendChild(positive_set)
    }
    

fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', createNote)