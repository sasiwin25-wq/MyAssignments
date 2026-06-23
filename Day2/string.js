//String declartion "", '', ``

//String literal /primitive dataType
let compName=" BNY"
let firmName = "BNY"
console.log(compName===firmName); //its true sonce both name same value, datatype as well


//object literal
let compName1 = new String("Testleaf") //holds address or reference value is assigned
let firmName1 = new String("Testleaf")
console.log("compName1===firmName1") //its false since both has same value, 



//Methods for string manipulation

//Escape sequence \, \n (newline), \t (tab), \(backslash

let Esc= 'It\'s  a JS session'

//length

let dblogo ="It \t is a \"double quote\""
console.log(dblogo);

//Concatenation: + , concat(), template literal ``

let stringAdd = compName+ "is a my company"+ compan

let concat = compName.concat(firmName)
console.log(concat)

// template litral
let tempLiteral = '$(firmName) is with ${compName)}


//length property
let courseName = "Playwright"

let courseNameLength =courseName.length
console.log("The length of the courseName is $(courseNameLength")

// indexOf() method
let indexofa = courseName.indexOf("a")
console.log('The index of the character a is ${indexofa}');

//charAt() method
