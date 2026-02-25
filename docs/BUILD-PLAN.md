# Menu Search and Filter Feature Planning Steps #

## Step 1 — Move menu data into a JavaScript array ##
Create a `menuItems` array of objects in a JS file, where each object holds the item's name, category, price, and description. No changes to the visible page yet — this is just setting up your data layer. Test by logging the array to the console.

## Step 2 — Write a render function ##
Write a `renderMenu()` function that reads from your array and builds the same HTML your static menu currently shows. Swap out your hardcoded HTML for a single empty container div, then call `renderMenu()` on page load. If the page looks identical to before, this step is done.

## Step 3 — Add the search input to the HTML ##
Just the HTML and CSS for the search bar — no logic yet. Confirm it looks right and sits in the correct place on the page.

## Step 4 — Wire up live search ##
Add an event listener on the search input that filters `menuItems` by name (or description) and passes the results to `renderMenu()`. Type a few things and confirm items appear and disappear correctly.

## Step 5 — Add filter buttons to the HTML ##
Add "All" plus one button per category to the page and style them, including an active/selected state. Hardcode the categories for now. No logic yet — just confirm they look right.

## Step 6 — Wire up the category filter ##
Add a click listener to each button that filters by category and calls `renderMenu()`. Also update the active style so the selected button is highlighted. Test each button independently.

## Step 7 — Make search and filter work together ##
Right now search and filter probably reset each other. In this step you introduce a shared state (e.g. `activeCategory` and `searchQuery` variables) so both filters apply simultaneously. Test combinations like searching "chicken" while "Mains" is active.

## Step 8 — Add a "no results" message ##
If the filtered list is empty, display a friendly message like "No items match your search." inside the menu container. Quick to add, but makes the experience feel complete.