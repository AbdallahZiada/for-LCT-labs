function myFunction(input) 
	{
		if(isNaN(input)) // checking if the input is a number
			{
				alert("please enter a valid integer number");
			}
		else // it's a number
			{
				var string="",i=0,characters ='abcdefghijklmnopqrstuvwxyz';
				var len=Number(input); // converting the number type from string to a number
				if(Number.isInteger(len)) // checking if the number is integer or float or other
					{ // if it's integer then execute
						for (; i < len; i++) { // every loop it generate a random character with the enterd length 
							var indexOfRandomChar = Math.floor(Math.random() * characters.length); 
							//characters.length refer to the number of possible charcaters
							string += characters.substring(indexOfRandomChar,indexOfRandomChar+1);
						}
						alert(string);
					}
				else
					{
						alert("the input should be an integer number");
					}
			}
	}



