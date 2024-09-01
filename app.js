const items = [...document.querySelectorAll(".number")]; //Spread operator ...array

const updateCount = (ele) => {
  const value = parseInt(ele.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCOunt = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      ele.textContent = `${value}+`;
      clearInterval(increaseCOunt);
      return;
    }
    ele.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
