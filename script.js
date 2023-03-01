class planet{
    name; 
    inner; 
    diameter; 
    color;   

    //Instead of the class name JS uses the constructor keyword, otherwise same idea as Java
    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}

//Constructor calls are the same, with one caveat 
//There's no typing on anything so you have to remember what type each property is 
let mer = new planet("Mercury", true, 3031.9, "#696969"); 

let planetsArray = []; 

//Push simply puts the element at the end of the array
planetsArray.push(mer); 

let ven = new planet("Venus", true, 7520.8, "#b89165");
let ear = new planet("Earth", true, 7917.5, "#5a5b86");
let mar = new planet("Mars", true, 4212.3, "#df8c4e");
let jup = new planet("Jupiter", false, 86881, "#f6a049");
let sat = new planet("Saturn", false, 72367, "#dcd3a1");
let ura = new planet("Uranus", false, 31518, "#b4d9df");
let nep = new planet("Neptune", false, 30599, "#456eff");

planetsArray.push(ven);
planetsArray.push(ear);
planetsArray.push(mar);
planetsArray.push(jup);
planetsArray.push(sat);
planetsArray.push(ura);
planetsArray.push(nep);

let avgdiametersum = 0;
let avgdiameter = 0;

for (let i = 0; i < planetsArray.length; i++){
    console.log(planetsArray[i].name);
    avgdiametersum += planetsArray[i].diameter;
}
avgdiameter = avgdiametersum / (planetsArray.length);
console.log(avgdiameter);

let index = 0;

//So I can find the function easier
function updatePlanetDisplay(){
    let planetIndexElm = document.getElementById("PlanetIndex");
    planetIndexElm.innerText = `Index: ${index}`;

    let nameElm = document.getElementById("PlanetName");
    nameElm.innerText = planetsArray[index].name

    let inOutElm = document.getElementById("InnerOuterPlanet");
    if (planetsArray[index].inner === true){
        inOutElm.innerText = `Inner Planet`;
    }
    else{
        inOutElm.innerText = `Outer Planet`;
    }

    if (index === 0){
        document.getElementById("PrevBtn").disabled = true;
    }
    else{
        document.getElementById("PrevBtn").disabled = false;
    }

    if (index === 7){
        document.getElementById("NextBtn").disabled = true;
    }
    else{
        document.getElementById("NextBtn").disabled = false;
    }

    document.getElementById("PlanetImage").style.backgroundColor = "planetsArray[index].color";
    document.getElementById("PlanetImage").style.height = "((planetsArray[index].diameter)/100)px";
    document.getElementById("PlanetImage").style.width = "((planetsArray[index].diameter)/100)px";
}
//So I can find the function easier

updatePlanetDisplay();

let prevBtn = document.getElementById("PrevBtn");
prevBtn.addEventListener("click", () =>{
    index--;
    //console.log(index);
    updatePlanetDisplay();
})

let nextBtn = document.getElementById("NextBtn");
nextBtn.addEventListener("click", () =>{
    index++;
    //console.log(index);
    updatePlanetDisplay();
})