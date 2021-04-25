$(document).ready(function(){

    $('#city').click(function(){
            
      var city = $("#search").val();

      if(city != ''){

        $.ajax({
          
          url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=3477121c3f78ed654ec3898a6009e4e0", 
          type: "GET",
          dataType: 'json',
          success: function(data){
            console.log(data);

          }
        });

      }else{
          $("#error").html('Field cannot be empty');
      }


    });


});

