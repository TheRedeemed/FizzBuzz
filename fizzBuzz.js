$(document).ready(function(){
                
                var inputNumber;
                
                $('#number').keyup(function(e){
                                var key = e.keyCode
                                if(key == 13) {
                                                event.preventDefault();
                                                getNumber();
                                };
                });           
                
                $('#addNumber').click(function(){
                                getNumber();
                }); 
                
                function getNumber(){
                                
                                var fizzAgain = true;
                                
                                inputNumber = $('#number').val();
                
                                do{
                                                                                
                                                if(isNaN(inputNumber)){
                                                                alert(inputNumber + ' is not a number\nPlease enter a valid number');
                                                                $('#number').val("");
                                                                $('#number').empty();                                  
                                                                
                                                } else {
                                                                $('.fizzBuzz').append('<b><br><br>FizzBuzz or Bust from 1 to ' + inputNumber + '<br></b>');                                       
                                                                $('#number').prop('disabled', true);
                                                                $('#addNumber').prop('disabled', true);
                                                                fizzBust(inputNumber);
                                                }
                                                                
                                                fizzAgain = confirm("Would like to FizzBuzz another number?");
                                                
                                                if(fizzAgain === true){
                                                                //alert('Let\' Fizz again!!!');
                                                                fizzAgain = false;
                                                                location.reload();
                                                                                                                                
                                                } else{
                                                                //alert('Bye!!!');
                                                                fizzAgain = false;                                              
                                                }
                                                
                                }while(fizzAgain);
                }
                
                function fizzBust(num){                
                                
                                                for(i=1; i<=num; i++){
                                                                $('.fizzBuzz').append('<br>'+ i + ' : ' + checkFizzBust(i) +'<br>');
                                                }                                              
                }
                
                function checkFizzBust(value){
                                
                                                if(((value % 3) === 0) && ((value % 5) === 0)){
                                                                return '<font color="purple">FizzBuzz</font>';
                                                                
                                                } else if ((value % 3) === 0){
                                                                return '<font color="blue">Fizz</font>';
                                                                
                                                } else if ((value % 5) === 0){
                                                                return '<font color="green">Buzz</font>';
                                                                
                                                } else {
                                                                return '<font color="red">Neither Fizz nor Buzz nor FizzBuzz... Just </font>' + value;
                                                }
                }
});
