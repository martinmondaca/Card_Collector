$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);


$(document).ready(function () {
  //sidenav
  $('.sidenav').sidenav();

  $('.collapsible').collapsible();

  $('.fixed-action-btn').floatingActionButton();

  //card img carousel
  $('.carousel').carousel({
    padding: 200

  });

  setInterval(function () {
    $('.carousel').carousel('next');
  }, 2000);
});