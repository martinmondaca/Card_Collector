function newCardRow(data) {
  var tableBody = $("#tableBody")
  var tableRow = `<tr>
  <td id="cardnumber">${data.cardnumber}</td>
  <td id="playername">${data.name}</td>
  <td id="isowned">
    <div class="mdc-form-field">
      <div class="mdc-checkbox">
        <input type="checkbox"
               class="mdc-checkbox__native-control"
               id="checkbox-1"/>
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
               viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>
    </div>
  </td>
  </tr>`
  tableBody.append(tableRow)
}


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