window.addEventListener("load", () => {
  const mainResult = document.querySelector(".main-result");

  const resultArr = [
    {
      id: 1,
      image: "../img/logo-airway.png",
    },
    {
      id: 2,
      image: "../img/logo-airway.png",
    },
    {
      id: 3,
      image: "../img/logo-vnairlines.png",
    },
    {
      id: 4,
      image: "../img/logo-airway.png",
    },
    {
      id: 5,
      image: "../img/logo-vnairlines.png",
    },
    {
      id: 6,
      image: "../img/logo-airway.png",
    },
    {
      id: 7,
      image: "../img/logo-vnairlines.png",
    },
    {
      id: 8,
      image: "../img/logo-vnairlines.png",
    },
  ];

  resultArr.forEach((e) => {
    const result = `
    <div class="main-result-item --bg-white rounded-lg">
            <div class="item-heading flex ai-center jc-between">
              <div class="item-heading-col brand flex ai-center">
                <div class="brand-logo">
                  <img class="block" src="${e.image}" alt="">
                </div>
                <span class="brand-name font-semibold upper leading-lg">Bamboo Airways</span>
              </div>
              <div class="item-heading-col journey flex ai-center">
                <div class="journey-departure text-center font-semibold">
                  <div class="journey-time departure-time">21:40</div>
                  <div class="journey-name departure-name shadow-main rounded-full --bg-purple-light">DAD</div>
                </div>
                <div class="journey-direct text-center relative">
                  <div class="journey-timetotal font-book">1h 30m</div>
                  <div class="journey-direct-line flex ai-center jc-between">
                    <div class="line-dot dot-purple --white"></div>
                    <div class="line-dot dot-purple --purple"></div>
                  </div>
                  <div class="journey-txt font-book">Direct</div>
                </div>
                <div class="journey-return text-center font-semibold">
                  <div class="journey-time return-time">23:10</div>
                  <div class="journey-name return-name shadow-main rounded-full --bg-purple-light">DAD</div>
                </div>
              </div>
              <div class="item-heading-col detail">
                <div class="detail-item flex ai-center baggage">
                  <i class="detail-icon"><img class="block" src="img/bag-icon.svg" alt=""></i>
                  <div class="detail-desc">Baggage <span class="--purple-cl font-semibold"> 20kg </span></div>
                </div>
                <div class="detail-item flex ai-center meal">
                  <i class="detail-icon"><img class="block" src="img/meal-icon.svg" alt=""></i>
                  <div class="detail-desc">In-flight <span class="--purple-cl font-semibold"> Meal </span></div>
                </div>
              </div>
              <div class="item-heading-col price">
                <div class="price-discount --gray-cl line-through mb-6">1,326,000 vnd</div>
                <div class="price-main --orange-cl font-semibold">1,322,000 vnd</div>
              </div>
              <div class="item-heading-col cta">
                <button
                  class="btn-choose rounded-full transition-all font-semibold border-0 outline-none --orange-cl --bg-orange-light">Choose</button>
              </div>
            </div>
            <div class="item-bottom">
              <div class="item-tab relative flex ai-center">
                <div class="item-tab-title z-10 transition-all --bg-white pointer font-semibold --gray-cl upper --bd12">
                  Flight detail</div>
                <div class="item-tab-title z-10 transition-all --bg-white pointer font-semibold --gray-cl upper --bd12">
                  fare info</div>
              </div>
              <div class="item-tabcontent transition-all flex jc-between flight-detail">
                <div class="item-tabcontent-col journey ">
                  <div class="journey-departure journey-row flex ai-center">
                    <div class="left text-center">
                      <div class="journey-time font-semibold">21:40</div>
                      <div class="journey-date font-book">11 Feb</div>
                    </div>
                    <div class="right">
                      <div class="location font-semibold">Da nang (DAD)</div>
                      <div class="airport font-book">Da Nang Airport</div>
                    </div>
                  </div>
                  <div class="journey-totaltime flex ai-center">1h 30m</div>
                  <div class="line --bg-purple flex flex-col ai-center jc-between">
                    <div class="line-dot dot-purple --white"></div>
                    <div class="line-dot dot-purple --purple"></div>
                  </div>
                  <div class="journey-return journey-row flex ai-center">
                    <div class="left text-center">
                      <div class="journey-time font-semibold">21:40</div>
                      <div class="journey-date font-book">11 Feb</div>
                    </div>
                    <div class="right">
                      <div class="location font-semibold">Ho Chi Minh City (SGN)</div>
                      <div class="airport font-book">Tansonnhat Intl</div>
                    </div>
                  </div>
                </div>
                <div class="item-tabcontent-col description">
                  <div class="description-brand flex ai-center">
                    <div class="description-logo brand-logo"><img class="block" src="img/logo-airway.png" alt=""></div>
                    <div class="description-text">
                      <div class="description-name brand-name font-semibold upper  leading-lg">Bamboo Airways</div>
                      <div class="description-category brand-category --bd12">
                        QH-183 <span class="brand-category-dot"></span> Economy
                      </div>
                    </div>
                  </div>
                  <div class="description-info rounded-lg flex ai-center --bg-purple-light">
                    <div class="description-col">
                      <div class="item">Baggage <span class="font-semibold --purple-cl">20kg</span> </div>
                      <div class="item">In-flight<span class="font-semibold --purple-cl"> Meal </span> </div>
                      <div class="item">In-flight <span class="font-semibold --purple-cl">Entertainment</span> </div>
                    </div>
                    <div class="description-col">
                      <div class="item">Aircraft <span class="font-semibold --purple-cl">Airbus A321</span> </div>
                      <div class="item">Seat layout<span class="font-semibold --purple-cl"> 3-3 </span> </div>
                      <div class="item">Seat pitch <span class="font-semibold --purple-cl">29 inches (standard)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-tabcontent transition-all fare-info flex jc-between ">
                <div class="item-tabcontent-col --left">
                  <h4 class="col-title upper font-semibold">Conditions</h4>
                  <div class="col-item brand flex ai-center">
                    <div class="col-logo brand-logo mr-12">
                      <img src="img/logo-airway.png" alt="">
                    </div>
                    <div class="col-text">
                      <div class="brand-name">Bamboo Airways</div>
                      <div class="brand-category --bd12">QH-183 <span class="brand-category-dot"></span> Economy</div>
                    </div>
                  </div>
                  <div class="col-item journey mb-16 ">
                    <div class="journey-heading flex ai-center relative">
                      <div class="journey-departure">
                        <div class="location font-book">Da Nang</div>
                      </div>
                      <div class=" journey-line flex jc-between ai-center --bg-purple">
                        <div class="line-dot dot-purple --white"></div>
                        <div class="line-dot dot-purple --purple"></div>
                      </div>
                      <div class="journey-return">
                        <div class="location font-book">Ho Chi Minh City</div>
                      </div>
                    </div>
                    <div class="location-sub font-book --purple-cl">Economy</div>
                  </div>
                  <div class="col-item font-book --bd12">
                    Non - Refundable
                  </div>
                </div>
                <div class="item-tabcontent-col --right">
                  <h4 class="col-title upper font-semibold">price details</h4>
                  <table class="item-tabcontent-talble w-full">
                    <tbody>
                      <tr>
                        <td>
                          <div class="table-item font-book">Adult Basic Fare (x1)</div>
                        </td>
                        <td>
                          <div class="table-item font-semibold">1,326,000 vnd</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-item font-book">Tax</div>
                        </td>
                        <td>
                          <div class="table-item font-book">included</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-item font-book">Regular Total Price</div>
                        </td>
                        <td>
                          <div class="table-item font-book">1,326,000 vnd</div>
                        </td>
                      </tr>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-item font-book --orange-cl">Save</div>
                        </td>
                        <td>
                          <div class="table-item font-book "> -4,000 vnd</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-item font-book ">You pay</div>
                        </td>
                        <td>
                          <div class="table-item font-semibold --orange-cl "> 1,322,000 vnd</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    `;
    mainResult.insertAdjacentHTML("beforeend", result);
  });

  const tabTitle = document.querySelectorAll(".main-result .item-tab-title");
  const tabContent = document.querySelectorAll(".main-result .item-tabcontent");
  tabTitle.forEach((title, index) => {
    title.addEventListener("click", (e) => {
      const Grandparent = title.parentElement.parentElement;
      // let tabContent = parent.querySelectorAll(".item-tabcontent");
      tabTitle.forEach((item) => item.classList.remove("active"));
      title.classList.add("active");
      tabContent.forEach((item) => item.classList.remove("active"));
      tabContent[index].classList.add("active");
    });
  });

  const inputSearchForm = document.getElementById("input-departure");
  const inputSearchTo = document.getElementById("input-return");
  const btnSwitch = document.querySelector(".switch-btn");
  btnSwitch.addEventListener("click", () => {
    let searchFromValue = inputSearchForm.value;
    let searchToValue = inputSearchTo.value;
    inputSearchForm.value = searchToValue;
    inputSearchTo.value = searchFromValue;
  });
  const filterItem = document.querySelectorAll(".main-filterbox-item");
  const filterList = document.querySelectorAll(".main-filterbox-list");
  filterItem.forEach((item) => {
    item.addEventListener("click", () => {
      filterList.forEach((item) => item.classList.remove("active"));
      item.querySelector(".main-filterbox-list").classList.add("active");
    });
  });
  document.addEventListener("click", clickOutSideFilterBox);
  function clickOutSideFilterBox(e) {
    if (
      e.target.matches(".main-filterbox-item ,.main-filterbox-item *") ||
      e.target.matches(".main-filterbox-list, .main-filterbox-list *")
    )
      return;
    filterList.forEach((item) => item.classList.remove("active"));
    console.log(false);
  }
});
