//Tea Constructor and Prototype
//Created constructor Tea. Tea function takes the following properties:type of tea, temperature and the size of the object(drink).

function Tea(type,temp,size){
  this.teaType = type;
  this.teaTemp = temp;
  this.teaSize = size;
}
//Green Tea Prototypes

var smallColdGreen = new Tea("green", "cold", "small");
console.log(smallColdGreen)


//Types of teas
//This variable gives the choices of teas offered
///const teaTypes = ["green","chai", "chamonile", "earlGray"]
//console.log(teaTypes)


//Tea temperatures
//This variable gives the choices of how the customer wants their tea to be cold or hot
///const teaTemperatures = ["cold-iced","cold-blended","cold-no ice","hot"]
//console.log(teaTemperatures)


//Tea Sizes
//This variable gives the choices of what size the customer wants their tea to be
///const teaSizes = ["Small(8 oz)", "Regular(12 oz)", "Medium(16 oz)", "Large(20 oz)"]
//console.log(teaSizes)
