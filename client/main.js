const complimentBtn = document.getElementById("complimentButton")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const result = res.data;
        alert(result);
    })       
         .catch(err => {
        console.log(err.response.data);
    })
};

const createNote = (body) => {
    axios.post("http://localhost:4000/api/", body)
        .then((res) => {
            display_sets(res.data)
        })
        .catch(err => {
            console.log(err.response.data);
        })
};

const delete_set = (id) => {
    axios.delete(`"http://localhost:4000/api/"/${id}`)
        .then((res) => {
            display_sets(res.data)
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

fortuneBtn.addEventListener('click', getFortune)