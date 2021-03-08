var userID;
// import Darkmode from 'darkmode-js';

// new Darkmode().showWidget();
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

  $(".button-collapse").sideNav();


  //card img carousel
  $('.carousel').carousel({
    padding: 200
  });

  setInterval(function () {
    $('.carousel').carousel('next');
  }, 2000);

  $(".displaySet").on("click", function displaySetTable(event) {
    event.preventDefault()
    var whatSet = $(this).attr("setname")
    var whatYear = $(this).attr("id")
    retrieveSet(whatSet, whatYear)
  })

  function retrieveSet(whatSet, whatYear) {
    window.location.replace("/members/" + whatSet + "/" + whatYear, function (data) {
      console.log("success")
    })
  }

  $('.hasCurrentCard').on('click', function () {
    console.log('edit submitted', $(this).attr("id"));
    cardId = $(this).attr("id");

    if ($(this).attr("checked")) {
      //delete
      $(this).removeAttr("checked")
      deleteOwn(cardId)
    } else {
      //create  
      //checking the card        
      $(this).attr("checked", "checked")

      $.post("/api/cardlist", {
        cardId: cardId,
      })
        .then(function () {
          console.log("Card Saved")
        });
    }
  })

  function deleteOwn(cardId) {
    $.ajax({
      method: "DELETE",
      url: "/api/cardlist/" + cardId
    }).then(function () {

    })
  }

});