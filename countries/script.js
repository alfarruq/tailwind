let html = document.getElementById("html");
let countries = document.getElementById("countries");
let btn = document.getElementById("dark");
let search = document.getElementById("input");
let select = document.getElementById("select");

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
});
// all countries
function getAllCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((json) => (data = showInHTML(json)));
}
getAllCountries();

// by Region
function getCountriesWidthRegion(region) {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => response.json())
    .then((json) => (data = showInHTML(json)));
}
if (select) {
  select.addEventListener("change", (e) => {
    if (e.target.value.toLocaleLowerCase() == "all") {
      getAllCountries();
    } else {
      getCountriesWidthRegion(e.target.value.toLocaleLowerCase());
    }
  });
}

// by name
function getCountriesByName(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .then((json) => showInHTML(json));
}
if (search) {
  search.oninput = (e) => {
    if (e.target.value.trim() == "") {
      getAllCountries();
    } else if (e.target.value) {
      getCountriesByName(search.value);
    }
  };
}
/////////////////////////////
// cards

function showInHTML(data) {
  if (countries) {
    countries.innerHTML = "";
    data.forEach((item) => {
      let card = document.createElement("div");
      let texts = document.createElement("div");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let population = document.createElement("p");
      let region = document.createElement("p");
      let capital = document.createElement("p");
      let a = document.createElement("a");

      a.href = "./page.html";
      img.src = item?.flags?.png;
      img.alt = item?.name?.common;
      h3.textContent = item?.name?.common;
      population.innerHTML = `<b>Population:</b> ${item?.population} `;
      region.innerHTML = `<b>Region:</b> ${item?.subregion} `;
      capital.innerHTML = `<b>Capital:</b> ${item?.capital}`;

      card.classList.add(
        "mt-10",
        "w-[264px]",
        "h-[336px]",
        "border-2",
        "border-gray-200",
        "rounded-md",
        "dark:border-none",
        "dark:bg-primary"
      );
      img.classList.add(
        "w-full",
        "rounded-md",
        "border",
        "h-[160px]",
        "dark:border-none"
      );
      texts.classList.add("p-2", "text-[14px]", "leading-6");
      h3.classList.add("font-bold", "text-xl", "my-2");

      texts.appendChild(h3);
      texts.appendChild(population);
      texts.appendChild(region);
      texts.appendChild(capital);

      card.appendChild(img);
      card.appendChild(texts);
      card.addEventListener("click", () => {
        localStorage.setItem("data", JSON.stringify(item));
        detailesCountry();
      });
      a.appendChild(card);
      countries.appendChild(a);
    });
  }
}
