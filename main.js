
var listOfProducts;
/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}




function initSite() {
    loadProducts();
    
     // This would also be a good place to initialize other parts of the UI
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    
    

    

 
    
    for (let i = 0; i < listOfProducts.length; i++) {

        // Sparar produktlistan i en variabel
        let Prodotti = listOfProducts[i]
        

        

        // Skapa bigContainer 
        
        let bigContainer = document.createElement("div")
        bigContainer.id = "bigContainer"
       
        
        
      
        
        // Phones name//title container
        let nomeBlocchi = document.createElement("div")
        nomeBlocchi.id = "nomeBlocchi"
        nomeBlocchi.innerHTML =Prodotti.title
        bigContainer.appendChild(nomeBlocchi)
        
         // Phone description container
        let descrizzioneBlocchi = document.createElement("div")
        descrizzioneBlocchi.id = "descrizzioneBlocchi"
        descrizzioneBlocchi.innerHTML = Prodotti.description
        bigContainer.appendChild(descrizzioneBlocchi)
       
        // Products image container
        let imgBlocchi = document.createElement("img")
        imgBlocchi.id = "imgBlocchi"
        imgBlocchi.src =Prodotti.image
        bigContainer.appendChild(imgBlocchi)

        // Phone price
        let prezzoBlocchi = document.createElement("div")
        prezzoBlocchi.id = "prezzoBlocchi"
        prezzoBlocchi.innerHTML = Prodotti.price + " " + "kr"
        bigContainer.appendChild(prezzoBlocchi)

        // kundvagns simbol 
        let cartIcon = document.createElement("i")
        cartIcon.classList = "fas fa-cart-arrow-down"
        
       // skapa en shop btn
        let shopButton = document.createElement("button")
        shopButton.id = "shopButton"
        shopButton.appendChild(cartIcon)
        bigContainer.appendChild(shopButton)

        // skapa en btn text
        let shopBtnTxt = document.createElement("p")
        shopBtnTxt.innerText = "Lägg till i kundvagnen"        
        shopButton.appendChild(shopBtnTxt)

        shopButton.addEventListener("click",function() {
             setItems(Prodotti)
             
        })

        // skicka till varukorg knappen
        
        mainContent.appendChild(bigContainer)
        

    }
    
       
    LocalStorage()
    
}

function LocalStorage(){
    let cartItems = localStorage.getItem("ProdottiInCart")
    cartItems = JSON.parse(cartItems)
    
    if (cartItems) {
        document.getElementById("cart").innerHTML = cartItems.length
        
        
    }
}


// funktion för att sparas data i kundsvagn 

function setItems(Prodotti){
    
    let cartItems = localStorage.getItem("ProdottiInCart")
    
    
    if(cartItems !=null){
        cartItems = JSON.parse(cartItems)

    }else{
        Prodotti.inCart = 1
        cartItems = [] 
        
    }
    
    cartItems.push(Prodotti)

    // pushar in product i array
    
    document.getElementById("cart").innerHTML = cartItems.length
    
    
    localStorage.setItem("ProdottiInCart", JSON.stringify(cartItems))
    //saves a key and converts from object to string so it can save in localStorage
}
    
   
