function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMenu(items = menuItems) {

  const container = document.getElementById("menu-container");

  // Guard: stop if the container doesn't exist
  if (!container) {
    console.error("renderMenu: #menu-container not found in the DOM.");
    return;
  }

  // Guard: handle empty array
  if (items.length === 0) {
    container.innerHTML = `
      <p class="no-results">No items match your search.</p>
    `;
    return;
  }

  // Group items by category, then by subcategory
  const grouped = {};

  items.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = {};
    }
    if (!grouped[item.category][item.subcategory]) {
      grouped[item.category][item.subcategory] = [];
    }
    grouped[item.category][item.subcategory].push(item);
  });

  // Build HTML string
  let html = "";

  Object.entries(grouped).forEach(([category, subcategories]) => {
    html += `<section>`;
    html += `<h2>${category}</h2>`;

    Object.entries(subcategories).forEach(([subcategory, subItems]) => {
      html += `
        <div class="menu-category">
          <h3>${subcategory}</h3>
          <div class="menu-items">
      `;

      subItems.forEach(item => {
        html += `
          <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-info">
              <h4>${escapeHTML(item.name || "Unnamed item")}</h4>
              <p>${escapeHTML(item.description || "")}</p>
            </div>
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</section>`;
  });

  container.innerHTML = html;
}

// Render on page load
renderMenu();