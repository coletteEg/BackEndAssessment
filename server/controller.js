module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["The one that recognizes the illusion does not act as if it is real.", "Time is precious, but truth is more precious than time.", "We first make our habits, and then our habits make us." , "You will be traveling and coming into a fortune.", "Your talents will be recognized and suitably rewarded.", "The value lies not within any particular thing, but in the desire placed on that thing."];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
        res.status(200).send(randomFortunes);
    }

    

}