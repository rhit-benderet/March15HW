const url = "https://example.com/"
fetch(url).then((response)=> {
    if (response.ok) {
        return response;
    }
    throw Error(response.statusText);  
})
.then(response => {
    console.log(response.body);
})
.catch(error=>console.log(error))