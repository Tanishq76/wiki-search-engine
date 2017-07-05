$(document).ready(function() {
  $("#submit").click(function(){
    var searchVal=$("#search").val();
  var link="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchVal+"&format=json&callback=?";
    $.ajax({
      type:"GET",
     url:link,
     async:false,
     dataType:"json",
     success: function(data){
      $("#searchResult").html(" ");
       for (var i = 0; i < data[1].length; i++) {
        $("#searchResult").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");

       }

     },
     error:function(errorMessage) {
       alert("error");
     }

    });
  });

});
