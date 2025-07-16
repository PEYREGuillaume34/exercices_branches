async function dummyOffers(){
    const response = await fetch ('https://dummyjson.com/posts');
    console.log(response)

    const data = response.json()
    console.log(data)
}

dummyOffers()