window.addEventListener("load", () => {
  const dropdownSelect = document.querySelectorAll(
    ".dropdown .dropdown-select"
  );
  dropdownSelect.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdownList = item.nextElementSibling;
      dropdownList.classList.toggle("active");
      document.addEventListener("click", handleClickOutsideDropdown);
      function handleClickOutsideDropdown(e) {
        if (
          e.target.matches(
            ".dropdown .dropdown-select, .dropdown .dropdown-select *"
          ) ||
          e.target.matches(".dropdown-list, .dropdown-list *")
        )
          return;
        dropdownList.classList.remove("active");
      }
    });
  });

  // dropdown qty
  const dropdownItemQty = document.querySelectorAll(
    ".dropdown.--qty .dropdown-list .item"
  );
  const minusBtn = document.querySelectorAll(".item-input.--minus");
  const plusBtn = document.querySelectorAll(".item-input.--plus");
  // change value input qty
  function changeValueAdult() {
    let inputAdult = document.querySelector(
      ".dropdown-list .item.--adult-item .item-input.--qty"
    );
    let numberAdult = document.querySelector(".dropdown-value .--number-adult");
    numberAdult.innerHTML = inputAdult.value;
    if (numberAdult.innerHTML < 10) {
      numberAdult.innerHTML = `0${inputAdult.value}`;
    }
    let inputChildren = document.querySelector(
      ".dropdown-list .item.--children-item .item-input.--qty"
    );
    let numberChildren = document.querySelector(
      ".dropdown-value .--number-children"
    );
    numberChildren.innerHTML = inputChildren.value;
    if (numberAdult.innerHTML < 10) {
      numberChildren.innerHTML = `0${inputChildren.value}`;
    }
  }
  changeValueAdult();

  minusBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      decrementQty(btn);
    });
  });
  plusBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      incrementQty(btn);
    });
  });
  function decrementQty(input) {
    let inputQty = input.nextElementSibling;
    inputQty.value--;
    if (inputQty.value < 1) {
      inputQty.value = 1;
    }
    changeValueAdult();
  }
  function incrementQty(input) {
    let inputQty = input.previousElementSibling;
    inputQty.value++;

    changeValueAdult();
  }

  //  dropdown class
  const dropdownItemClass = document.querySelectorAll(
    ".dropdown.--class .dropdown-list .item"
  );
  dropdownItemClass.forEach((item) => {
    item.addEventListener("click", () => {
      let select = item.parentElement.previousElementSibling;
      let value = select.querySelector(".dropdown-value");
      let valueCurrent = value.innerText;
      value.innerHTML = item.innerText;
      item.innerHTML = valueCurrent;
      select.nextElementSibling.classList.remove("active");
    });
  });

  // switch from to input
  const inputSearchForm = document.getElementById("search-input-from");
  const inputSearchTo = document.getElementById("search-input-to");
  const btnSwitch = document.querySelector(".switch-button");
  btnSwitch.addEventListener("click", () => {
    let searchFromValue = inputSearchForm.value;
    let searchToValue = inputSearchTo.value;
    inputSearchForm.value = searchToValue;
    inputSearchTo.value = searchFromValue;
  });

  const searchFlightForm = document.getElementById("search-flight");

  // searchFlightForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   let href = window.location.href;
  //   console.log('href :>> ', href);
  // });

  console.log(searchFlightForm);

  // datepicker from to input
  $(document).ready(function () {
    $("#date-from").datepicker({
      numberOfMonth: 1,
      dateFormat: "D, d M, yy",
      minDate: new Date(),
      onSelect: function (selectdate) {
        var dt = new Date(selectdate);
        dt.setDate(dt.getDate() + 1);
        $("#date-to").datepicker("option", "minDate", dt);
      },
    });

    $("#date-to").datepicker({
      numberOfMonth: 1,
      dateFormat: "D, d M, yy",
      changeMonth: true,
      changeYear: true,
      minDate: new Date(),
      onSelect: function (selectdate) {
        var dt = new Date(selectdate);
        dt.setDate(dt.getDate() - 1);
        $("#date-from").datepicker("option", "maxDate", dt);
      },
    });
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    $("#date-from").datepicker("setDate", "toDay");
    $("#date-to").datepicker("setDate", nextDay);
    $(".--next-from").on("click", function () {
      let date = $("#date-from").datepicker("getDate");
      date.setDate(date.getDate() + 1);
      $("#date-from").datepicker("setDate", date);
      $("#date-to").datepicker("option", "minDate", date);
    });
    $(".--prev-from").on("click", function () {
      let date = $("#date-from").datepicker("getDate");
      date.setDate(date.getDate() - 1);
      $("#date-from").datepicker("setDate", date);
      $("#date-to").datepicker("option", "minDate", date);
    });
    $(".--next-to").on("click", function () {
      let date = $("#date-to").datepicker("getDate");
      date.setDate(date.getDate() + 1);
      $("#date-to").datepicker("setDate", date);
      $("#date-from").datepicker("option", "maxDate", date);
    });
    $(".--prev-to").on("click", function () {
      let date = $("#date-to").datepicker("getDate");
      date.setDate(date.getDate() - 1);
      $("#date-to").datepicker("setDate", date);
      $("#date-from").datepicker("option", "maxDate", date);
    });
  });
});
