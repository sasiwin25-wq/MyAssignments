const console = require("console");

//condition
function getBrowser(browserName)
{
 //const browserName="chrome"
if(browserName==="chrome")
{
    console.log("This is a chrome browser");    
}
else if(browserName==="msedge"){
    console.log("This is msedge browser")
}
else{
    console.log("This is not a supported browser");
}

}
getBrowser("msedge")

function getVersion(browserName){
  switch (browserName) {
    case "chrome":
        console.log("chrome version is 131")
        break;
    case "opera":
        console.log("opera version is 345")
        break;
  
    default:
        console.log("Unsupported Browser");
        break;
  }  
  getVersion("chrom")
}