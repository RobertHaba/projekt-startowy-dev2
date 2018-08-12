function checkEmail(){
  var email = document.forms.form1.email.value;
  var re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;
  if(email.match(re) == null)
  $("#klik").on("click",function(){
      $(".center").switchClass( "center", "aktywny", 10 );
      $(".aktywny").switchClass( "aktywny", "center", 10 );
    });
  else{
    $("#pole1").addClass("finish");
  };
}
