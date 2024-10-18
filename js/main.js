let flag = true;
let rightSize = $(".right").outerWidth(true);
$("aside").animate({ left: -rightSize }, 0);
$(".click i").on("click", function () {
  if (flag) {
    $("aside").animate({ left: 0 }, 1000);
    flag = false;
    document.querySelector(".close").classList.remove("d-none");
    document.querySelector(".open").classList.add("d-none");
  } else {
    $("aside").animate({ left: -rightSize }, 1000);
    flag = true;
    document.querySelector(".close").classList.add("d-none");
    document.querySelector(".open").classList.remove("d-none");
  }
});

//


if (location.href.includes("index.html")) {
  async function fetchMeal() {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let data = await res.json();
    let homeData = data.meals;
    diplayHome(homeData);
  }

  function diplayHome(homeData) {
    let cartona = ``;
    for (let i = 0; i < homeData.length; i++) {
      cartona += `
            <div class="col-md-3">
                       <div onclick='displayItem(${homeData[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${homeData[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${homeData[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
           
           `;
    }
    document.querySelector(".row").innerHTML = cartona;
  }
  fetchMeal();
}
async function displayItem(itemId) {
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
document.querySelector('.loading-info').classList.remove('d-none')


document.querySelector(".rowSearch").innerHTML  = "";
document.querySelector("header .contact").innerHTML  = "";


  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`
  );
  let data = await res.json();
  let item = data.meals[0];
document.querySelector('.loading-info').classList.add('d-none')
  
  document.querySelector(".row").innerHTML = `

 <div class="col-md-3 text-white">
        <img src="${item.strMealThumb}" class="w-100 rounded" alt="" />
        <h2>${item.strMeal}</h2>
      </div>
      <div class="col-md-9 text-white">
        <h3>Instructions</h3>
        <p>
        ${item.strInstructions}
        </p>
        <p>
          Area :
          <span>${item.strArea}</span>
        </p>
        <p>
          Category :
          <span>${item.strCategory}</span>
        </p>
        <p>
          Recipes :
          <span class="badge text-bg-info">${item.strIngredient1}</span>
          <span class="badge text-bg-info">${item.strIngredient2}</span>
          <span class="badge text-bg-info">${item.strIngredient3}</span>
          <span class="badge text-bg-info">${item.strIngredient4}</span>
          <span class="badge text-bg-info">${item.strIngredient5}</span>
        </p>
        <p>
          tags :
          <span class="badge text-bg-primary">${item.strTags}</span>
        </p>
        <div class="d-flex gap-2">
       
          <a href='' class="btn btn-success">Source</a>
          <a href='${item.strYoutube}' class="btn btn-danger">Youtube</a>
       
        </div>
      </div>



`;
}

function displaySearch() {
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
document.querySelector("header .contact").innerHTML  = "";

  document.querySelector(".row").innerHTML = `
     <div class="col-md-6">
                <div class="inner">
                    <input onkeyup="displaySearshIteams(this.value)"  placeholder="Search By Name " class="form-control" type="text">
                </div>
            </div>
            <div class="col-md-6">
                <div class="inner">
                    <input onkeyup="displayIteamsSearch(this.value)" maxlength='1' placeholder="Search By First Letter " class="form-control" type="text">
                </div>
            </div>
            `;
}
async function displayCategory() {
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//

document.querySelector("header .contact").innerHTML  = "";
document.querySelector(".rowSearch").innerHTML  = "";
document.querySelector('.loading-info').classList.remove('d-none')

let res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
let data = await res.json()
let  category = data.categories
document.querySelector('.loading-info').classList.add('d-none')

document.querySelector(".rowSearch").innerHTML = '';


  let cartona = ``;
  for (let i = 0; i < category.length; i++) {
    cartona += `
           <div class="col-md-3">
                        <div onclick="displayCatItem('${category[i].strCategory}')" class="inner rounded overflow-hidden position-relative">
                         <img src="${
                           category[i].strCategoryThumb
                         }" class="w-100" alt="">
     
                         <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex justify-content-center text-center flex-column">
     <h2 class="px-4">
     ${category[i].strCategory}
     </h2>
     <p class="lead fw-lighter fs-6">
    ${category[i].strCategoryDescription.split(" ").slice(0, 15).join(" ")}
     </p>
                         </div>
                        </div>
                     </div>
           
           `;
  }
  document.querySelector(".row").innerHTML = cartona;
}
async function displayArea() {
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//

document.querySelector("header .contact").innerHTML  = "";
document.querySelector(".rowSearch").innerHTML  = "";
document.querySelector('.loading-info').classList.remove('d-none')
    let res  = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    let data = await res.json()
    let area = data.meals
    document.querySelector('.loading-info').classList.add('d-none')

    

    cartona = ``
            for (let i = 0; i < area.length; i++) {
                cartona += `
                 <div class="col-md-3">
                   <div  onclick="displayAreaItem('${area[i].strArea}')" class="inner text-center text-white">
                    <i class="fa-solid fa-laptop-house fa-4x"></i>
                    <h2>
                       ${area[i].strArea}
                    </h2>
                   </div>
                   </div>
                `
    
            }
            document.querySelector('.row').innerHTML  = cartona;

}
async function  displayIngredients(){
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//


document.querySelector("header .contact").innerHTML  = "";
document.querySelector(".rowSearch").innerHTML  = "";

document.querySelector('.loading-info').classList.remove('d-none')

    let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let data = await res.json()
    let ingredients = data.meals
    document.querySelector('.loading-info').classList.add('d-none')

    cartona = ``
            for (let i = 0; i < 20; i++) {
                cartona+=`
                <div class="col-md-3">
                        <div onclick="displayingrdItem('${ingredients[i].strIngredient}')"  class="inner text-center text-white">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h2>${ingredients[i].strIngredient}</h2>
                            <p>${ingredients[i].strDescription.split(' ').slice(0,15).join(' ')}</p>
                        </div>
                    </div>
                `
            }
            document.querySelector('.row').innerHTML   = cartona;


}

async function displayCatItem(categoryName) {
//
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
document.querySelector('.loading-info').classList.remove('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    let  data = await res.json()
    let  meals = data.meals
 
document.querySelector('.loading-info').classList.add('d-none')
    


  let cartona = ``
    for (let i = 0; i < meals.length; i++) {
  cartona += `
      <div class="col-md-3">
                       <div onclick='displayItem(${meals[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${meals[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${meals[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
  `
    
  }
  document.querySelector(".row").innerHTML = cartona;



}
async function displayingrdItem(ingredientsName) {

    //
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
document.querySelector('.loading-info').classList.remove('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`)
    let  data = await res.json()
    let  meals = data.meals
document.querySelector('.loading-info').classList.add('d-none')
 
    



  let cartona = ``
    for (let i = 0; i < meals.length; i++) {
  cartona += `
      <div class="col-md-3">
                       <div onclick='displayItem(${meals[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${meals[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${meals[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
  `
    
  }
  document.querySelector(".row").innerHTML = cartona;



}
async function displayAreaItem(areaName) {

    //
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
document.querySelector('.loading-info').classList.remove('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
    let  data = await res.json()
    let  meals = data.meals
 
document.querySelector('.loading-info').classList.add('d-none')
    



  let cartona = ``
    for (let i = 0; i < meals.length; i++) {
  cartona += `
      <div class="col-md-3">
                       <div onclick='displayItem(${meals[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${meals[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${meals[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
  `
    
  }
  document.querySelector(".row").innerHTML = cartona;



}
async function displaySearshIteams(searchName){
    //
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
try {
document.querySelector('.loading-serch').classList.remove('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
    let data = await res.json()
    let meals = data.meals
document.querySelector('.loading-serch').classList.add('d-none')


    let cartona = ``
    for (let i = 0; i < meals.length; i++) {
  cartona += `
      <div class="col-md-3">
                       <div onclick='displayItem(${meals[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${meals[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${meals[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
  `
    
  }
  document.querySelector(".rowSearch").innerHTML = cartona;
} catch (error) {
    console.log(error);
    document.querySelector(".rowSearch").innerHTML = `   <p class="alert-danger text-center bg-danger text-white py-3 rounded fs-4">inter a valid name</p>`;
    
    
}

}
async function displayIteamsSearch(searchName){
    //
$("aside").animate({ left: -rightSize }, 1000);
flag = true;
document.querySelector(".close").classList.add("d-none");
document.querySelector(".open").classList.remove("d-none");
//
try {
document.querySelector('.loading-serch').classList.remove('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchName}`)
    let data = await res.json()
    let meals = data.meals
    document.querySelector('.loading-serch').classList.add('d-none')

    let cartona = ``
    for (let i = 0; i < meals.length; i++) {
  cartona += `
      <div class="col-md-3">
                       <div onclick='displayItem(${meals[i].idMeal})' class="inner rounded overflow-hidden position-relative">
                        <img src="${meals[i].strMealThumb}" class="w-100" alt="">
    
                        <div class="text position-absolute bg-white bg-opacity-75 top-0 end-0 start-0 bottom-0 d-flex align-items-center">
    <h2>
        ${meals[i].strMeal}
    </h2>
                        </div>
                       </div>
                    </div>
  `
    
  }
  document.querySelector(".rowSearch").innerHTML = cartona;
} catch (error) {
    console.log(error);
    document.querySelector(".rowSearch").innerHTML = `   <p class="alert-danger text-center bg-danger text-white py-3 rounded fs-4">inter a valid name</p>`;
    
    
}

}


function displayContact() {
  //
  $("aside").animate({ left: -rightSize }, 1000);
  flag = true;
  document.querySelector(".close").classList.add("d-none");
  document.querySelector(".open").classList.remove("d-none");
  //
  

  document.querySelector(".rowSearch").innerHTML  = "";
  document.querySelector(".kolo").innerHTML  = "";


    document.querySelector("header .contact").innerHTML = `

      <div class="container vh-100 d-flex justify-content-center align-items-center flex-column ">
        <div class="row g-4">
            <div class="col-md-6">
                <input id='nameInput' oninput="validtionInputs()" type="text" placeholder="Enter Your Name" class="form-control ">
                <p class='text-center text-danger d-none' id='nameMsg'>Special characters and numbers not allowed</p>
                </div>
            <div class="col-md-6">
                <input id='emailInput' oninput="validtionInputs()" type="email" placeholder="Enter Your Email" class="form-control ">
                 <p class='text-center text-danger d-none' id='emailMsg'>Email not valid *exemple@yyy.zzz</p>
                </div>
            <div class="col-md-6">
                <input id='phoneInput' oninput="validtionInputs()"   type="text" placeholder="Enter Your Phone" class="form-control ">
                 <p class='text-center text-danger d-none' id='phoneMsg'>Enter valid Phone Number</p>
            </div>
            <div class="col-md-6">
                <input id='ageInput' oninput="validtionInputs()"  type="number" placeholder="Enter Your Age" class="form-control ">
                 <p class='text-center text-danger d-none' id='ageMsg'>Enter valid age</p>
            </div>
            <div class="col-md-6">
                <input id='passInput' oninput="validtionInputs()" type="password" placeholder="Enter Your Password" class="form-control ">
                 <p class='text-center text-danger d-none' id='passMsg'>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
            </div>
            <div class="col-md-6">
                <input id='repassInput' oninput="validtionInputs()" type="password" placeholder="Repassword" class="form-control ">
                 <p class='text-center text-danger d-none' id='repassMsg'>Enter valid repassword</p>
            </div>

        </div>
    <button disabled class="btn submit btn-danger my-3">Submit</button>

    </div>
`
}

function validtionInputs() {
 if (nameValid() || document.getElementById('nameInput').value !== '' ) {
  document.getElementById('nameMsg').classList.add('d-none')
 }else{
  document.getElementById('nameMsg').classList.remove('d-none')
 }


 if (emailValid() || document.getElementById('emailInput').value == '' ) {
  document.getElementById('emailMsg').classList.add('d-none')
 }else{
  document.getElementById('emailMsg').classList.remove('d-none')
 }


 if (phoneValid() || document.getElementById('phoneInput').value == '' ) {
  document.getElementById('phoneMsg').classList.add('d-none')
 }else{
  document.getElementById('phoneMsg').classList.remove('d-none')
 }


 if (ageValid() || document.getElementById('ageInput').value == '' ) {
  document.getElementById('ageMsg').classList.add('d-none')
 }else{
  document.getElementById('ageMsg').classList.remove('d-none')
 }


 if (passValid() || document.getElementById('passInput').value == '' ) {
  document.getElementById('passMsg').classList.add('d-none')
 }else{
  document.getElementById('passMsg').classList.remove('d-none')
 }


 if (repassValid() || document.getElementById('repassInput').value == '' ) {
  document.getElementById('repassMsg').classList.add('d-none')
 }else{
  document.getElementById('repassMsg').classList.remove('d-none')
 }
 
  if (
  nameValid() &&
  emailValid() &&
  ageValid() &&
  phoneValid() &&
  passValid() &&
  repassValid()
 ) {
  document.querySelector('.submit').removeAttribute('disabled')

 }else {
  document.querySelector('.submit').setAttribute('disabled' , true)

 }
}
function nameValid() {
  let regex = /^[a-z ,.'-]+$/i
  let nameValue = document.getElementById('nameInput').value
  return regex.test(nameValue)
}
function emailValid() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let emailValue = document.getElementById('emailInput').value
  return regex.test(emailValue)
}
function ageValid() {
  let regex = /^\S[0-9]{1,2}$/
  let ageValue = document.getElementById('ageInput').value
  return regex.test(ageValue)
}
function phoneValid() {
  let regex =/^01[0-25][0-9]{8}$/
  let phoneValue = document.getElementById('phoneInput').value
  return regex.test(phoneValue)
}
function passValid() {
  let regex =/(?=.*\d)(?=.*[a-z][0-9a-zA-Z]{6,}$)/
  let passValue = document.getElementById('passInput').value
  return regex.test(passValue)
}
function repassValid() {
  let passValue = document.getElementById('passInput').value
  let repassValue = document.getElementById('repassInput').value
  return passValue == repassValue
}









document.getElementById("Search").addEventListener("click", function () {
  displaySearch();
});
document.getElementById("Category").addEventListener("click", function () {
  displayCategory();
});
document.getElementById("Area").addEventListener("click", function () {
  displayArea();
});
document.getElementById("Ingredients").addEventListener("click", function () {
  displayIngredients();
});
document.getElementById("Contact").addEventListener("click", function () {
  displayContact();
});




$( function () {

  $('.loading .loader').fadeOut(500 , function () {
    $('.loading').fadeOut(500 ,function () {
      $('body').css( 'overflow' , 'auto' )
    } )
  })
  
})






// function validtionInputs(input , alertMsg ,regex ) {
//   let text = input.value
//   let regx = regex
//   let msg = document.getElementById(alertMsg)
//   if ( regx.test(text)) {
//     input.classList.add('is-valid')
//     input.classList.remove('is-invalid')
//     msg.classList.add('d-none')
//     return true
//   }else{
//     input.classList.remove('is-valid')
//     input.classList.add('is-invalid')
//     msg.classList.remove('d-none')
//     return false
//   }
  
// }
