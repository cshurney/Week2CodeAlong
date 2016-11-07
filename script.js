var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var multiplier = 1




for (var n=0; n<12; n++){

	for (var i=0; i<number.length; i++){
		var answer=number[i] * multiplier;

		console.log(number[i] + "*" + multiplier + "=" + answer);

}
		multiplier++;
}		
