const filterButtons = document.querySelectorAll(".filter-btn");

let activeCategory = "all";

function getFilteredByCategory(items) {
  if (activeCategory === "all") return items;
  return items.filter(item => item.category === activeCategory);
}

if (!filterButtons.length) {
  console.error("menu-filter.js: no .filter-btn elements found in the DOM.");
} else {

  function setActiveButton(selectedBtn) {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    selectedBtn.classList.add("active");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!btn.dataset.category) return;
      if (activeCategory === btn.dataset.category) return;
      activeCategory = btn.dataset.category;
      setActiveButton(btn);
      renderMenu(getFilteredItems());
    });
  });

}