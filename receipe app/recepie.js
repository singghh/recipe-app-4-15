
async function fetchdata1(){

    const search=document.getElementById("search-recipe").value.toLowerCase();
    const img=document.getElementById("recipe-img");
    const recipename=document.getElementById("recepie-name");
    const ingredients=document.querySelector("#recepie-ingre1");
    const recepie_ingre2=document.getElementById("recepie-ingre2");
    const notfound=document.querySelector("#notfound");
    notfound.style.display="none";
    try{
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if(!response.ok){
            throw new Error("Error");
        }
        const data=await response.json();
        pic=data.meals[0].strMealThumb;
        rname=data.meals[0].strMeal;
        img.src=pic
        recipename.innerText=rname;
        ingredients.innerHTML="";
        recepie_ingre2.innerHTML=""

        for(let i=1;i<=20;i++){
            ingre=data.meals[0]["strIngredient"+i]
            if(data.meals[0]["strIngredient"+i]==""||data.meals[0]["strIngredient"+i]==null){
                break;
            }
            const ingredientelement=document.createElement("p");
            ingredientelement.textContent=ingre;
            ingredients.appendChild(ingredientelement)
        }
        for(let i=1;i<=20;i++){
            const meas=data.meals[0]["strMeasure"+i]
            if(data.meals[0]["strMeasure"+i]==null||data.meals[0]["strMeasure"+i]==""){
                break;
            }
            const meas1=document.createElement("p");
            meas1.textContent=meas;
            recepie_ingre2.appendChild(meas1);
        }
    }
    catch(error){
        notfound.style.display="block";
    }
}

async function showdata(){
    const box=document.querySelector(".recipe-box-2");
    const search=document.getElementById("search-recipe").value.toLowerCase();
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

    try{
    if(!response.ok){
        throw new Error("Error");
    }
    const data=await response.json();
    para=data.meals[0].strInstructions;
    box.innerText=para;
    box.style.display="block";
    console.log(para)
}
catch(error){
    console.error(error);
}

}