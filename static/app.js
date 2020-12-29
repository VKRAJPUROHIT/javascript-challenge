// assign the data from data.js to a descriptive variable
var tableData = data;


// Get reference to tobody 
var $tbody=d3.select("tbody");


// Getting a reference to the input element on the page with the id property set to 'datetime'
var $date_in=d3.select("#datetime");


//Getting a reference to the input element on the page with the id property set to 'city'
var $city_in=d3.select("#city");


//Getting a reference to the input element on the page with the id property set to 'state'
var $state_in=d3.select("#state");

//Getting a reference to the input element on the page with the id property set to 'country'
var $country_in=d3.select("#country");


//Getting a reference to the input element on the page with the id property set to 'shape'
var $shape_in=d3.select("#shape");


// Getting a reference to the button on the page with the id property set to `search`
var $search_button=d3.select("#search");


//Getting a reference to the button on the page with the id property set to `reset`
var $reset_button=d3.select("#reset_btn");


//We can use the `on` function in d3 to attach an event to the search handler function
$search_button.on("click",searchhandleclick);


loadTable = (inputData) => {
// Refactor to use Arrow Functions!
//loop through array of objects then each object 
inputData.forEach((dataRow) => {
    
    
  //append one table row `tr` for each ufo sighting  object
  // Don't worry about adding cells or text yet, just try appending the `tr` elements.    
      var row = $tbody.append("tr");    
  
  
  //get the entries for each object in the array
      Object.values(dataRow).forEach((val) => {
  
  
      //append a cell to the row for each value in the ufo sighting     
        var cell = row.append("td");
  
  
      // update each cell's text with ufo sighting values (datetime, city, state, country,shape,durationMinutes,comments)
        cell.text(val);
      });
    });
}


//populate table 
loadTable(data)


//complete the event handle function for the form function
function searchhandleclick () {


  // Prevent the page from refreshing
  d3.event.preventDefault();


 //add filtered data to table
 $tbody.html("");

  //get the value of the property of the input date element
  var inputDate=$date_in.property("value").trim();


  // if the user enters the date form, then do these steps:
  if (inputDate != "") {


  //filter all the ufo sightings from the dataset that match the input date 
  var inputData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputDate);
 };


  //get the value of the property of the input city element
  var inputCity = $city_in.property("value").toLowerCase().trim();


  //if the user enters the city form , then do these steps:
  if (inputCity !=""){


  //filter all the ufo sightings from the dataset that match the input city
  var inputData = tableData.filter(ufo_sighting => ufo_sighting.city===inputCity);
  };


 // get the value of the property of the state element
  var inputState = $state_in.property("value").toLowerCase().trim();


  // if the user enters the city form, then do these steps:
  if (inputState !=""){


    //filter all the ufo sightings from the dataset that match the input state
    var inputData = tableData.filter(ufo_sighting => ufo_sighting.state===inputState);
  };  


  //get the value of the property of the input country element 
  var inputCountry = $country_in.property("value").toLowerCase().trim();


  //if the user enters the country form, then do these steps:
  if (inputCountry!=""){


    //filter all the ufo sightings from the dataset that match the input country 
    var inputData = tableData.filter(ufo_sighting => ufo_sighting.country===inputCountry);
  };


  //get the value of the property of the input shape element
  var inputShape = $shape_in.property("value").toLowerCase().trim();


  //if the user enters the shape form, then do these steps:
  if (inputShape!=""){


    //filter all the ufo sightings from the dataset that match the input shape
    var inputData = tableData.filter(ufo_sighting => ufo_sighting.shape===inputShape);
  };



//if the user enters all the 5 inputs at once, then do these steps:
if(inputDate!="" && inputCity!="" && inputState!="" && inputCountry!= "" && inputShape != ""){


  //filter all the ufo sightings from the dataset that match all the 5 inouts
  var inputData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputDate && ufo_sighting.city === inputCity && ufo_sighting.state === inputState &&
    ufo_sighting.country === inputCountry && ufo_sighting.shape === inputShape)}
     

  //populate filtered table 
  loadTable(inputData);   
    };


  //We can use the `on` function in d3 to attach an event to the reset handler arrow function
  $reset_button.on("click",()=>{

   
   // script for making input values to default values 
    var x = document.getElementsByClassName("form-control");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].value = "";
    }


    // clear table in html tbody
     $tbody.html("");    
    

    //populate table
    loadTable(data)
   

    //print on console to check if the reset was succesful
    console.log("Table reset")
  })