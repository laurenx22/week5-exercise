const searchInput = document.getElementById("search-input");

function getFilteredItems() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const categoryFiltered = getFilteredByCategory(menuItems);

  if (!query) return categoryFiltered;

  return categoryFiltered.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(query);
    const descriptionMatch = item.description.toLowerCase().includes(query);
    return nameMatch || descriptionMatch;
  });
}

if (!searchInput) {
  console.error("menu-search.js: #search-input not found in the DOM.");
} else {

  function handleSearch() {
    renderMenu(getFilteredItems());
  }

  searchInput.addEventListener("input", handleSearch);
  searchInput.addEventListener("search", handleSearch);

}