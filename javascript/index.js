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
  BahamasTime.innerHTML = `${now.format("h:mm:ss")} <span class="timing">${now.format("A")}</span>`;
}

updateBahamasTime();
setInterval(updateBahamasTime, 1000);

const TokyoHours = document.querySelector("#tokyo .hours");
const TokyoTime = document.querySelector("#tokyo .time");

function updateTokyoTime() {
  const now = moment.tz("Japan");
  const localOffset = moment().utcOffset();
  const hoursDifference = (now.utcOffset() - localOffset) / 60;
  const difference =
    hoursDifference === 0
      ? "Same as local time"
      : `${hoursDifference > 0 ? "+" : ""}${hoursDifference} hours`;

  TokyoHours.textContent = difference;
  TokyoTime.innerHTML = `${now.format("h:mm:ss")} <span class="timing">${now.format("A")}</span>`;
}

updateTokyoTime();
setInterval(updateTokyoTime, 1000);
