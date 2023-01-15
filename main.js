const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const saveBtn = document.querySelector(".save");
const eventSpan = document.querySelector(".event");
let usersTime;

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;
  daysCount.textContent = Math.floor(result / 1000 / 60 / 60 / 24);
  hoursCount.textContent = Math.floor(result / 1000 / 60 / 60) % 24;
  minutesCount.textContent = Math.floor(result / 1000 / 60) % 60;
  secondsCount.textContent = Math.floor(result / 1000) % 60;
};

const setDate = () => {
  eventSpan.textContent = eventName.value;
  imageSection.style.backgroundImage = `url(${eventImg.value})`;
  usersTime = new Date(
    `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
  );
  setTime();
};
setDate();
setInterval(setTime, 1000);
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
});
saveBtn.addEventListener("click", setDate);
