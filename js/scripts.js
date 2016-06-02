$(document).ready(function() {
  $("form#selected-animal").submit(function(event){

    $("#animal")
    var animal = parseInt($("#animal").val());
  


    if (animal === 1) {
      $('#turtle').show();
      $('#snake').hide();
      $('#spider').hide();
    } else if (animal === 2) {
      $('#snake').show();
      $('#turtle').hide();
      $('#spider').hide();
    } else {
      (animal === 3)
      $('#spider').show();
      $('#snake').hide();
      $('#turtle').hide();
    }

    event.preventDefault();
  });
});
