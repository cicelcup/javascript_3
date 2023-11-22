async function fetchData(url) {
    return await fetch(url);
}

let promesa = new Promise((resolve, reject) => {
    setTimeout(async ()  => {
        let data = await fetchData("https://pokeapi.co/api/v2/pokemon/ditto");
        if (data.status == 200) {
            let item = await data.json();
            resolve(item.forms);
        } else {
            reject("Error");
        }
    }, 1000);
});

promesa.then(res => console.log(res))
    .catch(res => console.log(res));