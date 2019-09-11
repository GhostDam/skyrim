$( document ).ready(function() {
  $(".ver div").click(function(event) {
      console.log($(this).html())
      $($(this)).find(".item").toggleClass("hide tc")
  });
});
