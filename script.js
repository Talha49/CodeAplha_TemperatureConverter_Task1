const celcius = document.querySelector("#celcius");
const temptype = document.querySelector("#temp-type");
const button = document.querySelector("#convert-btn");
const degree = document.querySelector("#degree");


window.addEventListener("load", ()=>{
    degree.value = "";
    celcius.innerHTML = "";
} );

if(degree.value === ""){
 button.setAttribute("disabled", "");
 setTimeout(() =>{
    button.removeAttribute("disabled");
 }, 4000);

} 

button.addEventListener("click", (e) =>{
e.preventDefault();
convertion();
button.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
setTimeout(()=>{
button.innerHTML = "<span>Convert</span>"
},1000)

});





const convertion = () =>{
    let inputval = degree.value;


    setTimeout( () => {

        if (temptype.value === "fahrenheit")
        {

            const FahrenheitToCelcius = (inputval - 32) * (5 / 9);
            celcius.innerHTML = `${FahrenheitToCelcius.toFixed(3)} &deg;c`;
            
        }
        else if(temptype.value === "kelvin"){ 
        const KelvinToCelcius = inputval - 273.15;
        celcius.innerHTML = `${KelvinToCelcius.toFixed(3)} &deg;c`;   
        }
    }, 1200)
        }    