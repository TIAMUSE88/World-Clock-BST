const citiesSelect = document.querySelector("#cities");
const selectedCityElement = document.querySelector("#selected-city");
const currentDateElement = document.querySelector("#current-date");
let selectedCityTimeZone = "";

function updateCurrentDate() {
  currentDateElement.textContent = moment().format("dddd, D MMMM YYYY");
}

updateCurrentDate();
setInterval(updateCurrentDate, 60_000);

citiesSelect.addEventListener("change", updateCity);

function updateCity() {
  selectedCityTimeZone = citiesSelect.value;

  if (!selectedCityTimeZone) {
    selectedCityElement.innerHTML = "";
    return;
  }

  updateSelectedCityTime();
}

function updateSelectedCityTime() {
  if (!selectedCityTimeZone) {
    return;
  }

  const cityTime =
    selectedCityTimeZone === "local"
      ? moment()
      : moment().tz(selectedCityTimeZone);
  const localOffset = moment().utcOffset();
  const hoursDifference = (cityTime.utcOffset() - localOffset) / 60;
  const difference =
    hoursDifference === 0
      ? "Same as local time"
      : `${hoursDifference > 0 ? "+" : ""}${hoursDifference} hours`;
  const cityName = citiesSelect.options[citiesSelect.selectedIndex].text;
  const cityDate = cityTime.format("dddd");

  selectedCityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="hours">${difference}</div>
      </div>
      <div class="city-clock">
        <div class="date">${cityDate}</div>
        <div class="time">
          ${cityTime.format("h:mm:ss")} <span class="timing">${cityTime.format("A")}</span>
        </div>
      </div>
    </div>
  `;
}

setInterval(updateSelectedCityTime, 1000);

const BahamasHours = document.querySelector("#bahamas .hours");
const BahamasTime = document.querySelector("#bahamas .time");

function updateBahamasTime() {
  const now = moment.tz("America/Nassau");
  const localOffset = moment().utcOffset();
  const hoursDifference = (now.utcOffset() - localOffset) / 60;
  const difference =
    hoursDifference === 0
      ? "Same as local time"
      : `${hoursDifference > 0 ? "+" : ""}${hoursDifference} hours`;

  BahamasHours.textContent = difference;
  document.querySelector("#bahamas .date").textContent = now.format("dddd");
  BahamasTime.innerHTML = `${now.format("h:mm:ss")} <span class="timing">${now.format("A")}</span>`;
}

updateBahamasTime();
setInterval(updateBahamasTime, 1000);

const TokyoHours = document.querySelector("#tokyo .hours");
const TokyoTime = document.querySelector("#tokyo .time");

function updateTokyoTime() {
  const now = moment.tz("Asia/Tokyo");
  const localOffset = moment().utcOffset();
  const hoursDifference = (now.utcOffset() - localOffset) / 60;
  const difference =
    hoursDifference === 0
      ? "Same as local time"
      : `${hoursDifference > 0 ? "+" : ""}${hoursDifference} hours`;

  TokyoHours.textContent = difference;
  document.querySelector("#tokyo .date").textContent = now.format("dddd");
  TokyoTime.innerHTML = `${now.format("h:mm:ss")} <span class="timing">${now.format("A")}</span>`;
}

updateTokyoTime();
setInterval(updateTokyoTime, 1000);
