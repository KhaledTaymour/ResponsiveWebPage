function openNav() {
  document.querySelector(".menu").style.width = "250px";
  document.querySelector(".cover").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.querySelector(".menu").style.width = "0";
}

function showFormation(year) {
  switch (year) {
    case '2019':
      document.querySelector(".formation-2019").style.display = 'block';
      document.querySelector(".formation-2018").style.display = 'none';
      break;
    case '2018':
      document.querySelector(".formation-2018").style.display = 'block';
      document.querySelector(".formation-2019").style.display = 'none';
      break;
    default:
      break;
  }
}
