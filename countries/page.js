let btn = document.getElementById("dark");

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
});

// Page HTML function
let flag = document.getElementById("flag");
let h2 = document.getElementById("h2");
let name = document.getElementById("name");
let population = document.getElementById("population");
let region = document.getElementById("region");
let capital = document.getElementById("capital");
let level = document.getElementById("level");
let currencies = document.getElementById("currencies");
let languages = document.getElementById("languages");
let borders = document.getElementById("borders");
function detailesCountry() {

  let getCurrencies = {
    name: function Currencies(){
      return this.name
    }
  }

  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  flag.src = data?.flags?.png;
  flag.alt = data?.name?.common;
  h2.textContent = data?.name?.common;
  name.innerHTML = ` <b>Native Name: </b> ${data?.name?.common}`;
  population.innerHTML = `<b>Population:</b> ${data?.population}`;
  region.innerHTML = ` <b>Region: </b> ${data?.region}`;
  capital.innerHTML = ` <b>Capital: </b> ${data?.capital[0]}`;

  console.log(getCurrencies.name().call(data?.currencies).name);
}

detailesCountry();
