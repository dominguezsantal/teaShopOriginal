//COSTS

// Applying the cost of tea drink based on size selection

var sizeCost = [];
     var size = ("small", "medium", "large", "xlarge")
      if (size = "small") {
      sizeCost = 1.70;
    };
      if (size = "medium") {
      sizeCost = 2.25;
    };
      if (size = "large") {
      sizeCost = 2.75;
    };
      if (size = "xlarge") {
      sizeCost = 3.00;
    };


	//console.log('sizeCost');

  var totalCost = (sizeCost);





  //Button Javascript
  //Testing button will display total cost of tea size selected
$( document ).ready(function() {
    $('.totalCost').on('click',function(){
    /** button function with click listener **/
      buttonFunc();
    });
 });

function buttonFunc(){
alert('Your cost is'+ totalCost);
}
