'use strict';

$(".show-modal").click(function (e) { 
  e.stopPropagation();
  showModal()
});

$("body").click(function (e) {
  hideModal()
})

$("close-modal").click(function (e) {
  e.stopPropagation();
  hideModal()
})

$(document).on("keydown", function (e) {
  if (e.key == "Escape") {
    hideModal()
  }
  console.log(e.key)
})

function showModal() {
  $(".modal").removeClass("hidden")
  $(".overlay").removeClass("hidden")
  console.log($(".modal").attr("class"))
}

function hideModal() {
  $(".modal").addClass("hidden");
  $(".overlay").addClass("hidden");
  console.log($(".modal").attr("class"))
}

