import { fetchData, postData } from "./modules/DataMiner.js";

(() => {

    console.log('loaded.');

    function popErrorBox(message) {
        alert("somthing has totally messed up and we need help!");
    }


// this is the data payload from our ajax request, parses it
    function handleDataSet(data) {
        //populate a lightbox
        //and then open it

        let lighbox = document.querySelector(".lightbox");
    }

    function retrieveProjectInfo() {
        //test for an ID
        //check for an id if there isn't one, then don't try the fetch call
        // because it'll break (the PHP will choke!)
        // if(!event.target.id) {   return   }
        if(!event.target.id) {return}


        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));

    }

    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

        for (let user in thumbs) {
            // make a copy of our template here and then
            // populate the children (text elements) with 
            // the static data from data object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${thumbs[user].avatar}.jpg`;
            currentUserText[1].id = thumbs[user].id;

            userSection.appendChild(currentUser);
    }
    userSection.addEventListener("click", retrieveProjectInfo);
}
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => { console.log(err), popErrorBox(err); });

    //     fetchData("./includes/index.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });

})();