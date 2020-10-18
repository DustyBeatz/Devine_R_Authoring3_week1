(() => {
    //XHTTP is the old triend-and-true way of doing AJAX - still relevant, but there are better options

//create an instance of the AJAX object
    let myReq = new XMLHttpRequest;

    // add an event handler so that we can track the stages of the request and respond accordingly
    myReq.addEventListener("readystatechange", handleRequest);

    // get the request ready to go / configure it with method and resource request
    myReq.open('GET', '../DataSet.json');

    //send the request off to the server
    myReq.send();

    //this is a passive listener function - it gets invoked for every stage of the AJAX request. When the request is done and the data payload is returned from the server it passes that data to the handleDataSet function

    function handleRequest() {
        debugger;
        if (myReq.readyState === XMLHttpRequest.DONE) {
            debugger;
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

    debugger;

    // fetch(url)
    // .then(response =>response.json())
    // .then( data => console.log(data))
    // .catch((err) => console.error(err));

    //select our users elements and load the content

    function handleDataSet(data) {

        let myData = JSON.parse(data),
        userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;


        for (let user in myData) {

            debugger;

            // make a copy of our template here and then
            // populate the children (text elements) with 
            // the static data from myData object
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = myData[user].name;
            currentUserText[2].textContent = myData[user].role;
            currentUserText[3].textContent = myData[user].nickname;

            userSection.appendChild(currentUser);
        }
        
        console.log(data);
 
    }

})();
