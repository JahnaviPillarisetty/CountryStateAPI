const apiUrl = "https://api.countrystatecity.in/v1/countries/";
async function getData(){
    try{
        
   var requestOptions = {
      method: 'GET',
      headers: {
        "accept": "application/json",
         "X-CSCAPI-KEY": "Z2hCOG5ZcTUyWHk2TEJaQUdtcjFnU1R4UEhYYkdGeWFaRmtJbDZrWA==",
       
      }
      
    };
    let resp = await fetch(apiUrl,requestOptions);
    let data = await resp.json();
    console.log(data);
    uploadCountryDetails(data);
    } catch (error) {
        console.log(error)
    }
}

getData();

function uploadCountryDetails(data){
  let form = document.getElementById('countryForm');
  let dropdown = document.getElementById('countryList');
  dropdown.length = 0;
  
  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Country';
  
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
  
      
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].iso2;
            dropdown.add(option);
        }
        form.append(dropdown);    
  document.body.append(form);
}
async function fetchStateDetails(){
  let selectedValue = document.getElementById('countryList').value;
  console.log(selectedValue);
  try {
    var requestStateOptions = {
      method: 'GET',
      headers: {
        "accept": "application/json",
         "X-CSCAPI-KEY": "Z2hCOG5ZcTUyWHk2TEJaQUdtcjFnU1R4UEhYYkdGeWFaRmtJbDZrWA==",
      
      }
      
    };
    let respState = await fetch(apiUrl+selectedValue+"/states",requestStateOptions);
    let statesdata = await respState.json();
    console.log(statesdata);
    uploadStateDetails(statesdata);
    } catch (error) {
        console.log(error)
    }
  
    
  }
  function uploadStateDetails(data){
    let form = document.getElementById('stateForm');
    let dropdown = document.getElementById('stateList');
    dropdown.length = 0;
    
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose State';
    
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    
        
          for (let i = 0; i < data.length; i++) {
              option = document.createElement('option');
              option.text = data[i].name;
              option.value = data[i].iso2;
              dropdown.add(option);
          }
          form.append(dropdown);    
    document.body.append(form);
  }

  async function fetchCityDetails(){
    var selectedValue = document.getElementById('countryList').value;
    let selectedStateValue = document.getElementById('stateList').value;
    console.log(selectedStateValue);
    try {
      var requestCityOptions = {
        method: 'GET',
        headers: {
          "accept": "application/json",
           "X-CSCAPI-KEY": "Z2hCOG5ZcTUyWHk2TEJaQUdtcjFnU1R4UEhYYkdGeWFaRmtJbDZrWA==",
        
        }
        
      };
      let respCities = await fetch(apiUrl+selectedValue+"/states/"+selectedStateValue+"/cities",requestCityOptions);
      let citiesdata = await respCities.json();
      console.log(citiesdata);
      uploadCityDetails(citiesdata);
      } catch (error) {
          console.log(error)
      }
    
      
    }
    function uploadCityDetails(data){
      let form = document.getElementById('cityForm');
      let dropdown = document.getElementById('cityList');
      dropdown.length = 0;
      
      let defaultOption = document.createElement('option');
      defaultOption.text = 'Cities';
      
      dropdown.add(defaultOption);
      dropdown.selectedIndex = 0;
      
          
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i].name;
                option.value = data[i].iso2;
                dropdown.add(option);
            }
            form.append(dropdown);    
      document.body.append(form);
    }
  
