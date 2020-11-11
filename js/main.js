import { fetchData, postData } from "./modules/DataMiner.js";

(() => {

    console.log('loaded.');

    function popErrorBox(message) {
        alert("somthing has totally messed up and we need help!");
    }


// this is the data payload from our ajax request, parses it
    function handleDataSet(data) {
        let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;


        

        for (let user in data) {

            debugger;

            // make a copy of our template here and then
            // populate the children (text elements) with 
            // the static data from data object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].avatar}.jpg`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }
        
        console.log(data);
 
    }
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
})();