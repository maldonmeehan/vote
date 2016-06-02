$(document).ready(function() {
  $("#animal form").submit(function(event)
  var animal = $("#animal").val();


if (animal === 1) {
  $('#turtle').show();
} else if (animal === 2) {
  $('#snake').show();
} else { (animal === 3)
  $('#spider').show();
}

event.preventDefault();
  });
});
