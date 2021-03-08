var userID;

$(document).ready(() => {

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

});

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
  }, 1500);

  $(".displaySet").on("click", function displaySetTable(event) {
    event.preventDefault()
    var whatSet = $(this).attr("setname")
    var whatYear = $(this).attr("id")
    retrieveSet(whatSet, whatYear)
  })

  function retrieveSet(whatSet, whatYear) {
    window.location.replace("/members/" + whatSet + "/" + whatYear, function (data) {
    })
  }

  $('.hasCurrentCard').on('click', function () {
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