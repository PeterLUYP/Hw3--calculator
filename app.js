$(function(){
	var prevnum = 0;

	var ancientnum = "";

	var savenum = "";

	var switchfunc = "";

	function enter(){
		$('#screen').text(prevnum);
	};

	$('#1').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "1";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "1";
	    }
	    enter();
	});

	$('#2').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "2";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "2";
	    }

	    enter();
	});

	$('#3').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "3";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "3";
	    }

	    enter();
	});

	$('#4').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "4";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "4";
	    }

	    enter();
	});

	$('#5').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "5";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "5";
	    }

	    enter();
	});

	$('#6').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "6";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "6";
	    }

	    enter();
	});

	$('#7').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "7";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "7";
	    }

	    enter();
	});

	$('#8').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "8";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "8";
	    }

	    enter();
	});

	$('#9').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "9";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "9";
	    }

	    enter();
	});

	$('#0').on('click',function(){
		if(prevnum === 0){
			ancientnum = "0";
		    prevnum = "0";
	    }
	    else{
	    	ancientnum = prevnum;
	    	prevnum = prevnum + "0";
	    }

	    deleteEnter();
	});

	$('#clear').on('click', function(){
		$('#screen').text('0');
		prevnum = "";
	});

	$('#delete').on('click', function(){
		prevnum = ancientnum;
		enter();
	})

	$('#plus').on('click', function(){
		savenum = prevnum;
		prevnum = "";
		switchfunc = 1;
	});

	$('#minus').on('click', function(){
		if(prevnum === 0){
			prevnum = "-";
			enter();
		}
		else{
		   savenum = prevnum;
		   prevnum = "";
		   switchfunc = 2;
		}
	});

	$('#multiply').on('click', function(){
		savenum = prevnum;
		prevnum = "";
		switchfunc = 3;
	});

	$('#divide').on('click', function(){
		savenum = prevnum;
		prevnum = "";
		switchfunc = 4;
	});

	$('#point').on('click', function(){
		prevnum = prevnum + ".";

		enter();
	});

	function cal(intA, intB){
		var Ans = "";

		intA = parseFloat(intA);
		intB = parseFloat(intB);

		switch(switchfunc){
			case 1 :
			Ans = intA + intB;

			break;

			case 2 :
			Ans = intA - intB;

			break;

			case 3 :
			Ans = intA * intB;

			break;

			case 4 :
			Ans = intA / intB;

			break;

			default:

			break;
		}

		prevnum = Ans;
		savenum = "";
		return Ans;
	};

	$('#equal').on('click', function(){
		$('#screen').text(cal(savenum, prevnum, switchfunc));
	});




});