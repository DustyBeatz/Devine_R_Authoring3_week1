    //start a fetch call
    async function fetchData() {
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

    async function postData(sourceURL){
        //use fetch or Axios to post to a database here

        return "You are using postData API endpoint";
    }


    export {fetchData, postData};