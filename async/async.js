const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 500;
        setTimeout(() =>
        {
            if(delay > 4000)
                reject("Connection Timeout. Try again");
            else
                resolve("Success!!!");
        }, delay)
    })
}

fakeRequest('google.com/api/docs/page1')
    .then((data) =>
    {
        console.log("Connection has been made for page1");
        console.log(data);
        return fakeRequest('google.com/api/docs/page2');
    })
    .then((data) =>
    {
        console.log("Connecttion has been made for page2");
        console.log(data);
        return fakeRequest('google.com/api/docs/page3');
    })
    .then((data) =>
    {
        console.log("Connection has been made for page3");
        console.log(data);
    })
    .catch((err) =>
    {
        console.log("Error!");
        console.log(err);
    })

