(() => {
    //start a fetch call
    async function fecthData() {
        let resource = await fetch('./DataSet.json').then(response => {
            //bang operator - means  "Does not equal" !==
            if (response.status !== 200) {
                throw new Error(`DANGER WILL ROBINSON! Error ${response.status}`);
            }

            return response;

        })

        // if we get success, then we can return back our resource after we parse it into plain JS
        let dataset = await resource.json();

        return dataset;
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

    fecthData().then(data => handleDataSet(data)).catch(err => console.log(err));

})();