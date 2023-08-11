const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const searchBtn = document.querySelector("#fruit");
const outputList = document.querySelector(".outputList");
const searchBox = document.getElementById("searchBox");
const renderChildEl = function(e) {
  let searchText = !!e ? e.target.value : '';
  if (searchText.length == 0) {
    outputList.innerHTML = '';
    e.stopPropagation();
    return;
  }
  
  const filtered = fruit.filter(e => e.toLowerCase().includes(searchText.toLowerCase()));
  let childsEl = '';
  for (const fruit of filtered) {
    childsEl += `<li onclick="selectFruit(event)"> ${fruit}</li>`;
  }
outputList.innerHTML = childsEl;
}
searchBtn.addEventListener('keyup', renderChildEl);
const selectFruit = (e) => {
  searchBtn.value = e.target.textContent.trim();
}
function search() {
  outputList.innerHTML = '';
  const userInput = searchBox.value.toLowerCase();
  const results = [];
  for (const item of fruit) {
    const lowercaseFruit = item.toLowerCase();

    if (lowercaseFruit.includes(userInput)) {
      results.push(item);

      const option = document.createElement('option');
      option.value = item;
      resultsDropdown.appendChild(option);
  }
}
if (results.length > 0) {
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
  }

  return results;
}
function highlightSuggestion(event) {
  const hoveredItem = event.target;
  const highlightedItem = dropdownList.querySelector(".highlighted");
    if (highlightedItem) {
      highlightedItem.classList.remove("highlighted");
    }
    hoveredItem.classList.add("highlighted");
  }
  dropdownList.addEventListener("mouseover", highlightSuggestion);
  dropdownList.addEventListener("mouseout", () => {
    const highlightedItem = dropdownList.querySelector(".highlighted");
    if (highlightedItem) {
      highlightedItem.classList.remove("highlighted");
    }
  });
searchBox.addEventListener("input", () => {
  search();
});