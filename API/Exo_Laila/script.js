async function movies() {
    const response = await fetch('https://www.the-one-api.dev/v2/movie', {
        headers: { Authorization: "Bearer GVeTGNvHZopfMwTwXkwl" }
    });
    console.log(response);

    const data = await response.json();

    const filmList = document.getElementById("films");

    for (let item of data.docs) {
        let nom = document.createElement("h1");
        let budget = document.createElement("p");

        nom.innerHTML = item.name;
        budget.innerHTML = `Budget: ${item.budgetInMillions} millions`;

        filmList.appendChild(nom);
        filmList.appendChild(budget);
    }
}

movies();