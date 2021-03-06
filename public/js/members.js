var userID;

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });


  // $.get("/members" + )

});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);


$(document).ready(function () {

  //pdf
  // const pdfKit = require("pdfkit")
  // const blobStream = require("blob-stream")
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



  //creating pdf file
  // function makePDF() {
  //   const doc = new pdfKit;

  //   const stream = doc.pipe(blobStream())

  //   doc.end()

  //   stream.on('finish', function () {
  //     const url = stream.toBlobURL("application/pdf")
  //     const element = document.getElementById("downloadPDF")
  //     element.setAttribute("href", url)
  //     element.style.display = "block"
  //   })
  // }

function cardSave() {
  var currentCard = $(this)
  .parent()
  .parent()
  .data("id");
  return currentCard
}

$('.checkbox').on('click', function (e) {
  console.log('edit submtted', $(this).attr("id"))
  $.post("/api/cardlist", {
    cardId: $(this).attr("id"),
  })
    .then(function () {
      console.log("Card Saved")
    });
})

});