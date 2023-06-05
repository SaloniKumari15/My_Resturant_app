let input;
let button;
let menuItems;
let tables;
let orderDetails;
document.addEventListener("DOMContentLoaded", () => {
  const tables = [
    { id: 1, name: "Table 1" },
    { id: 2, name: "Table 2" },
    { id: 3, name: "Table 3" },
  ];

  const tablesDiv = document.createElement("div");
  tablesDiv.classList.add("tables");

  const h2 = document.createElement("h2");
  h2.textContent = "Tables";
  tablesDiv.appendChild(h2);

  const input = document.createElement("input");
  input.type = "text";
  input.id = "input1";
  input.placeholder = "Search table";
  tablesDiv.appendChild(input);

  const tableCardsDiv = document.createElement("div");
  tableCardsDiv.classList.add("table-cards");
  tablesDiv.appendChild(tableCardsDiv);

  tables.map((table) => {
    const tableCardDiv = document.createElement("div");
    tableCardDiv.classList.add("table-card");
    tableCardDiv.dataset.id = table.id;

    const h3 = document.createElement("h3");
    h3.textContent = table.name;
    tableCardDiv.appendChild(h3);

    const orderDetailsDiv = document.createElement("div");
    orderDetailsDiv.classList.add("order-details");
    tableCardDiv.appendChild(orderDetailsDiv);

    const orderItemsDiv = document.createElement("div");
    orderItemsDiv.classList.add("order-items");
    orderDetailsDiv.appendChild(orderItemsDiv);

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    orderDetailsDiv.appendChild(totalDiv);

    const orderDetailsShowDiv = document.createElement("div");
    orderDetailsShowDiv.classList.add("order-details-show");
    tableCardDiv.appendChild(orderDetailsShowDiv);

    tableCardsDiv.appendChild(tableCardDiv);
  });

  var container = document.querySelector(".container");
  container.appendChild(tablesDiv);
});
// document.addEventListener("DOMContentLoaded", () => {
//   var menuHTML =
//     '<div class="menu-item entrees" id="item1">' +
//     "<h3>Paneer Butter Masala with Naan</h3>" +
//     '<p class="price">300</p>' +
//     "</div>" +
//     '<div class="menu-item main-courses" id="item2">' +
//     "<h3>Veg Biryani</h3>" +
//     '<p class="price">200</p>' +
//     "</div>" +
//     '<div class="menu-item entrees" id="item3">' +
//     "<h3>Butter Chicken with Naan</h3>" +
//     '<p class="price">300</p>' +
//     "</div>" +
//     '<div class="menu-item entrees" id="item4">' +
//     "<h3>Paneer Tikka Butter Masala</h3>" +
//     '<p class="price">250</p>' +
//     "</div>" +
//     '<div class="menu-item main-courses" id="item5">' +
//     "<h3>Chicken Biryani</h3>" +
//     '<p class="price">200</p>' +
//     "</div>" +
//     '<div class="menu-item desserts" id="item6">' +
//     "<h3>Gulab Jamun</h3>" +
//     '<p class="price">30</p>' +
//     "</div>" +
//     '<div class="menu-item beverages" id="item7">' +
//     "<h3>Lassi</h3>" +
//     '<p class="price">70</p>' +
//     "</div>" +
//     '<div class="menu-item main-courses" id="item8">' +
//     "<h3>Veg Hakka Noodles</h3>" +
//     '<p class="price">120</p>' +
//     "</div>";

//   var container = document.getElementById("menuItems");

//   container.innerHTML = menuHTML;
// });

document.addEventListener("DOMContentLoaded", () => {
  var menuItems = [
    { id: "item1", category: "entrees", name: "Paneer Butter Masala with Naan", price: 300 },
    { id: "item2", category: "main-courses", name: "Veg Biryani", price: 200 },
    { id: "item3", category: "entrees", name: "Butter Chicken with Naan", price: 300 },
    { id: "item4", category: "entrees", name: "Paneer Tikka Butter Masala", price: 250 },
    { id: "item5", category: "main-courses", name: "Chicken Biryani", price: 200 },
    { id: "item6", category: "desserts", name: "Gulab Jamun", price: 30 },
    { id: "item7", category: "beverages", name: "Lassi", price: 70 },
    { id: "item8", category: "main-courses", name: "Veg Hakka Noodles", price: 120 },
  ];

  var menuHTML = menuItems
    .map((item) => {
      return `<div class="menu-item ${item.category}" id="${item.id}">
              <h3>${item.name}</h3>
              <p class="price">${item.price}</p>
            </div>`;
    })
    .join("");

  var container = document.getElementById("menuItems");

  container.innerHTML = menuHTML;
});

class OrderItem {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
  }

  render(Iid) {
    const itemCard = document.createElement("div");
    itemCard.className = "order-item";
    itemCard.id = Iid;

    const itemName = document.createElement("h3");
    itemName.textContent = this.item.name;
    itemName.className = "order-name";
    itemCard.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = this.item.price;
    itemPrice.className = "price";
    itemCard.appendChild(itemPrice);

    const itemQuantity = document.createElement("p");
    itemQuantity.textContent = `Quantity: ${this.quantity}`;
    itemQuantity.className = "quantity";
    itemCard.appendChild(itemQuantity);

    // Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-item-btn";
    itemCard.appendChild(removeBtn);

    // Add click handler for remove button
    removeBtn.addEventListener("click", () => {
      itemCard.remove();
    });

    return itemCard;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function renderMenuItems(menuItems) {
    menuList.innerHTML = "";
    menuItems.forEach((menuItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = menuItem.name;
      menuList.appendChild(listItem);
    });
  }

  // select DOM elements
  const searchInput = document.getElementById("myInput");
  const searchButton = document.getElementById("myButton");
  const categorySelect = document.getElementById("categorySelect");
  const menuItems = document.querySelectorAll(".menu-item");

  // add event listeners to search input and category select
  searchInput.addEventListener("input", filterMenuItems);
  categorySelect.addEventListener("change", filterMenuItems);

  function filterMenuItems() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();

    menuItems.forEach((menuItem) => {
      const itemTitle = menuItem.querySelector("h3").textContent.toLowerCase();
      const itemCategory = menuItem.classList[1];

      if (itemTitle.includes(searchText) && (selectedCategory === "" || itemCategory === selectedCategory)) {
        menuItem.style.display = "block";
      } else {
        menuItem.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tableCards = document.querySelectorAll(".table-card");
  const searchInput = document.getElementById("input1");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    tableCards.forEach((tableCard) => {
      const tableName = tableCard.querySelector("h3").textContent.toLowerCase();
      if (tableName.includes(searchTerm)) {
        tableCard.style.display = "block";
      } else {
        tableCard.style.display = "none";
      }
    });
  });
  tableCards.forEach((tableCard) => {
    tableCard.addEventListener("click", () => {
      const tableId = tableCard.dataset.id;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  tables = document.querySelectorAll(".table-card");
  menuItems = document.querySelectorAll(".menu-item");

  tables.forEach((table) => {
    table.addEventListener("dragover", handleDragOver);
    table.addEventListener("drop", handleDrop);
    table.addEventListener("dragenter", handleDragEnter);
    table.addEventListener("dragleave", handleDragLeave);
  });

  menuItems.forEach((item) => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", handleDragStart);
  });
});
const handleDragStart = (event) => {
  const menuItem = event.target;
  console.log(menuItem.id);
  event.dataTransfer.setData("text/plain", menuItem.id);
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDragEnter = (event) => {
  const tableId = event.target.dataset.id;
  event.target.classList.add("over");
  console.log(`Entered table with ID: ${tableId}`);
};

const handleDragLeave = (event) => {
  const tableId = event.target.dataset.id;
  event.target.classList.remove("over");
  console.log(`Left table with ID: ${tableId}`);
};

const handleDrop = (event) => {
  event.preventDefault();
  const table = document.querySelector('[data-id="' + event.currentTarget.dataset.id + '"]');
  const orderDetails = table.querySelector(".order-details");
  const orderDetailsShow = table.querySelector(".order-details-show");
  table.classList.remove("over");
  const menuItemId = event.dataTransfer.getData("text/plain");
  const menuItem = document.getElementById(menuItemId);
  const itemName = menuItem.querySelector("h3") ? menuItem.querySelector("h3").innerText : "";
  const itemPrice = menuItem.querySelector(".price") ? menuItem.querySelector(".price").innerText : "";
  const orderItemsContainer = orderDetails.querySelector(".order-items");
  let orderItem = orderItemsContainer.querySelector('[id="' + menuItemId + '"]');
  if (orderItem) {
    // If the item is already in the order items list, increment its quantity by 1
    let itemQuantity = orderItem.querySelector(".quantity").innerHTML;
    let quantityAsInt = parseInt(itemQuantity.replace("Quantity: ", ""), 10);
    quantityAsInt += 1;
    orderItem.querySelector(".quantity").innerHTML = "Quantity: " + quantityAsInt;
  } else {
    const item = { name: itemName, price: itemPrice };
    const quantity = 1;
    const orderItem = new OrderItem(item, quantity);
    orderItemsContainer.appendChild(orderItem.render(menuItemId));
  }
  updateOrderTotal(table, orderDetails);
};
const updateOrderTotal = (table, orderDetails) => {
  const orderItems = table ? table.querySelectorAll(".order-item") : document.querySelectorAll(".order-item");
  const orderDetailsShow = table.querySelector(".order-details-show");
  let total = 0;
  let quan = 0;
  orderItems.forEach((item) => {
    const html = item.outerHTML;
    const price = parseFloat(item.querySelector(".price").innerText.replace("$", ""));
    const quantity = parseInt(item.querySelector(".quantity").innerText.replace("Quantity: ", ""));
    quan += quantity;
    total += price * quantity;
  });
  orderDetailsShow.innerHTML = `Rs.${total.toFixed(2)} | Total-items: ${quan}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  popup.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  // get the popup elements
  const popup = document.querySelector(".popup");
  const popupContent = popup.querySelector(".popup-content");
  const popupTable = popupContent.querySelector("table");
  const popupTotal = popupContent.querySelector(".total");

  // add a click event listener to each table
  const tableslist = document.querySelectorAll(".table-card");
  tableslist.forEach((table) => {
    table.addEventListener("click", () => {
      const tableId = table.getAttribute("data-id");
      const orderlist = document.querySelectorAll(`.table-card[data-id="${tableId}"] .order-items .order-item`);
      const orderTotal = document.querySelector(`.table-card[data-id="${tableId}"] .total`);
      // clear the previous contents of the popup table
      popupTable.querySelector("tbody").innerHTML = "";

      // get the order items from the clicked table

      orderlist.forEach((item) => {
        // create a row in the popup table for each item

        const row = document.createElement("tr");

        const itemName = item.querySelector(".order-name").innerHTML;
        const itemNameCell = document.createElement("td");
        itemNameCell.textContent = itemName;
        row.appendChild(itemNameCell);

        const itemQuantity = item.querySelector(".quantity").innerHTML;
        const quantityAsInt = parseInt(itemQuantity.replace("Quantity: ", ""), 10);
        const itemQuantityCell = document.createElement("td");
        const quantityHtml = `
  <input class="quantity-input" type="number" value="${quantityAsInt}" min="1" max="10">
  
`;

        itemQuantityCell.innerHTML = quantityHtml;
        row.appendChild(itemQuantityCell);
        const quantityInput = itemQuantityCell.querySelector(".quantity-input");

        quantityInput.addEventListener("change", () => {
          // get the new value of the input element
          const newValue = quantityInput.value;
          const itemQuantity = item.querySelector(".quantity");
          // check if the new value is within the min and max range
          updateSubtotal(row);
          updateTotal();
          itemQuantity.innerHTML = "Quantity: " + newValue;
          updateOrderTotal(table, orderlist);
        });

        const itemPrice = item.querySelector(".price").innerHTML;
        const priceAsInt = parseInt(itemPrice, 10);
        const itemPriceCell = document.createElement("td");
        itemPriceCell.textContent = priceAsInt;
        row.appendChild(itemPriceCell);

        const itemsubCell = document.createElement("td");
        itemsubCell.textContent = priceAsInt * quantityAsInt;
        row.appendChild(itemsubCell);

        // add a remove button to the row
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = '<img src="remove-icon.png" alt="" width="20px" height="20px">';
        removeBtn.addEventListener("click", () => {
          row.remove();
          updateTotal();
          item.remove();
          updateOrderTotal(table, orderlist);
        });
        const removeCell = document.createElement("td");
        removeCell.appendChild(removeBtn);
        row.appendChild(removeCell);

        // add the row to the popup table
        popupTable.querySelector("tbody").appendChild(row);
      });

      // update the total in the popup
      updateTotal();
      updateOrderTotal(table, orderlist);
      // show the popup
      popup.style.display = "flex";

      const clearBtn = popup.querySelector(".close-session");
      clearBtn.addEventListener("click", () => {
        orderlist.forEach((itemMen) => {
          itemMen.remove();
        });
        const rows = popupTable.querySelectorAll("tbody tr");
        rows.forEach((row) => {
          row.remove();
        });
        updateTotal();

        updateOrderTotal(table, orderlist);
        popup.style.display = "none";
      });
    });
  });

  // add a click event listener to the close button in the popup
  const closeBtn = popup.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // update the total in the popup
  function updateTotal() {
    const subtotalCells = popupTable.querySelectorAll("td:nth-of-type(4)");
    let subtotal = 0;
    subtotalCells.forEach((cell) => {
      subtotal += parseFloat(cell.textContent);
    });
    popupTotal.textContent = "Total: Rs " + subtotal.toFixed(2);
  }

  function updateSubtotal(row) {
    const quantityCells = row.querySelectorAll("td:nth-of-type(2)");
    let subtotal = 0;
    quantityCells.forEach((cell) => {
      const inputElement = cell.querySelector(".quantity-input");
      const quantity = inputElement.value;
      const price = parseFloat(cell.nextElementSibling.textContent);
      subtotal += quantity * price;
    });
    const subtotalCells = row.querySelectorAll("td:nth-of-type(4)");
    subtotalCells[0].innerHTML = subtotal;
  }
});
