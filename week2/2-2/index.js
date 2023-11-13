const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    category: "쇼핑",
    title: "신발 구매",
    amount: 112000,
    type: "loss",
  },
  {
    category: "용돈",
    title: "용돈이당!!!",
    amount: 100000,
    type: "income",
  },
  {
    category: "식비",
    title: "노티드 도넛",
    amount: 10500,
    type: "loss",
  },
  {
    category: "용돈",
    title: "또 용돈이당!!!",
    amount: 200000,
    type: "income",
  },
];

const createItem = (isIncome, category, title, amount) => {
  const historyAssetClass = isIncome ? "plus" : "minus";
  const historyItemClass = isIncome ? "income" : "loss";

  const newItem = document.createElement("li");
  newItem.classList.add("history_item");
  newItem.classList.add(`${historyItemClass}`);

  newItem.innerHTML = `
        <button type="button">
            <img src="assets/x_icon.png" alt="x 버튼" class="x_icon">
        </button>
        <p class="history_category">${category}</p>
        <p class="history_title">${title}</p>
        <p class="history_asset ${historyAssetClass}">${
    isIncome ? "+" : "-"
  }${amount}</p>
    `;

  const list = document.querySelector("ul");
  list.appendChild(newItem);

  const xButtons = document.querySelectorAll(".x_icon");

  xButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const listItem = button.closest(".history_item");
      if (listItem) {
        listItem.remove();
        updateAsset();
      }
    });
  });
};

const initListItem = () => {
  const totalAssetElement = document.querySelector(".total_asset");
  totalAssetElement.textContent = INIT_BALANCE;

  HISTORY_LIST.forEach(({ type, category, title, amount }) => {
    const isIncome = type === "income";
    createItem(isIncome, category, title, amount);
  });
};

document.addEventListener("DOMContentLoaded", initListItem);

const updateAsset = () => {
  const plusAssetElements = document.querySelectorAll(".history_asset.plus");
  const minusAssetElements = document.querySelectorAll(".history_asset.minus");

  let plusAssetTotal = 0;
  let minusAssetTotal = 0;

  plusAssetElements.forEach((element) => {
    plusAssetTotal += parseInt(element.textContent);
  });

  minusAssetElements.forEach(({ textContent }) => {
    minusAssetTotal += parseInt(textContent);
  });

  const total = plusAssetTotal + minusAssetTotal;

  const assetInElement = document.querySelector(".asset_in");
  const assetOutElement = document.querySelector(".asset_out");
  const totalAssetElement = document.querySelector(".total_asset");
  assetInElement.textContent = plusAssetTotal;
  assetOutElement.textContent = minusAssetTotal;
  totalAssetElement.textContent = total;
};

document.addEventListener("DOMContentLoaded", updateAsset);

const saveButton = document.querySelector(".submit_button");

const addItem = () => {
  const categorySelect = document.querySelector(".category_select");
  const selectedOption = categorySelect.options[categorySelect.selectedIndex];
  const category = selectedOption.textContent;

  const amount = document.querySelector(".amount_input").value;
  const title = document.querySelector(".content_input").value;

  const inButton = document.querySelector(".asset_button.in");
  const isIncome = inButton.classList.contains("active");

  createItem(isIncome, category, title, amount);
  alert("저장되었습니다");

  categorySelect.selectedIndex = 0;
  document.querySelector(".amount_input").value = "";
  document.querySelector(".content_input").value = "";
};

saveButton.addEventListener("click", addItem);
saveButton.addEventListener("click", updateAsset);

const inButton = document.querySelector(".asset_button.in");
const outButton = document.querySelector(".asset_button.out");
const selectElement = document.querySelector(".category_select");

inButton.addEventListener("click", function () {
  inButton.classList.add("active");
  outButton.classList.remove("active");
  selectElement.innerHTML = "";
  const option1 = document.createElement("option");
  option1.value = "allowance";
  option1.text = "용돈";
  const option2 = document.createElement("option");
  option2.value = "salary";
  option2.text = "월급";
  selectElement.appendChild(option1);
  selectElement.appendChild(option2);
});

outButton.addEventListener("click", function () {
  outButton.classList.add("active");
  inButton.classList.remove("active");

  selectElement.innerHTML = "";
  const option1 = document.createElement("option");
  option1.value = "shopping";
  option1.text = "쇼핑";
  const option2 = document.createElement("option");
  option2.value = "eat";
  option2.text = "식비";
  selectElement.appendChild(option1);
  selectElement.appendChild(option2);
});

const addButton = document.querySelector(".add_button");
const closeButton = document.querySelector(".close_button");
const modal = document.querySelector(".modal");

addButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

const inCheckbox = document.querySelector('input[name="in"]');
const outCheckbox = document.querySelector('input[name="out"]');

inCheckbox.addEventListener("change", function () {
  const plusItems = document.querySelectorAll(".history_item.income");

  if (inCheckbox.checked) {
    plusItems.forEach((item) => {
      item.style.display = "flex";
    });
  } else {
    plusItems.forEach((item) => {
      item.style.display = "none";
    });
  }
});

outCheckbox.addEventListener("change", function () {
  const minusItems = document.querySelectorAll(".history_item.loss");

  if (outCheckbox.checked) {
    minusItems.forEach((item) => {
      item.style.display = "flex";
    });
  } else {
    minusItems.forEach((item) => {
      item.style.display = "none";
    });
  }
});
