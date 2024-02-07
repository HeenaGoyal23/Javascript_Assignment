const URL = "https://jsonplaceholder.typicode.com/posts";//url of api

// function declaration
const fetchData = async () => {//will return a promise as async always returns a promise
    try {
        const response = await fetch(URL);//fetching data from url
        //checking if data is fetched or any error occured
        if (!response.ok) {
            throw new Error("Error Occurred: " + response.status);//throws an error in case of any problem
        }
        const data = await response.json();//converting data fetched to json format
        const requiredData = data.slice(0, 5);//slicing the first 5 values from fetched data
        const titles = requiredData.map(value => value.title);//fetching the titles from each record
        console.log(titles);//printing titles
    }
    catch (err) {
        console.log(err);//printing error if occurred
    }
}

fetchData();//calling function