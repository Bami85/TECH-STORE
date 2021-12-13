function showCards() {
    
    let productList = localStorage.getItem('ProdottiInCart')
   
    if (productList !=null) {
        productList = JSON.parse(productList)     

        // delete elements and leave the shopping cart empty if localStorage == localstorage.clear

    } else {
        let noProdottiInCart = document.createElement("h1")
        noProdottiInCart.innerHTML = "Kundvagnen är tom."
    
        document.getElementById("summaContainer").style.display = "none"

        index = document.getElementById("index")
        index.appendChild(noProdottiInCart)

    }
    // showTotal will show the final price.
    let showTotal = 0  

    // creo una funzione per le cart in carrelo

    function menuItems(){
      
        let numSpan = document.getElementById("cart")
        let itemInStorage = localStorage.getItem("ProdottiInCart")
        let jsonItemInStorage = JSON.parse(itemInStorage)
    
        let quantityInstorage = jsonItemInStorage.length
    
        numSpan.textContent=quantityInstorage


    }
    menuItems()
    
    //complete buy button that deletes products, reloads the page and saves purchase history
    
    document.getElementById("checkOutBtn").addEventListener("click", function(){
        
        alert("Tack för ditt köp!");
        
        let objectHistory
        objectHistory = localStorage.getItem("ProdottiInCart")

        localStorage.clear();
        location.reload();

        localStorage.setItem("objectHistory" , objectHistory)

    })
    
        let removeValue = 0
        let buttonId = removeValue
    

    let belopp = document.getElementById("belopp")

    for (let i = 0; i < productList.length; i++) {

        let product = productList[i]

        //updates the final price each time a new product is added to the shopping cart.
        showTotal = showTotal + product.price

        let imgContainer = document.createElement("div")    
        let textContainer = document.createElement("div")

          
        let cardContainer = document.createElement("div")
        cardContainer.className = "cardContainer" 
        cardContainer.id = "cardContainer"

        let indexContainer = document.getElementById("index")


        let productImg = document.createElement("img")
        productImg.src = product.image

        let productTitle = document.createElement("h1")
        productTitle.innerHTML = product.title
          
        let productPrice = document.createElement("b")
        productPrice.innerHTML = product.price + " kr"
    

        //creates a button with a unique ID for each productcard. the button removes the product from the productList, updates local storage and reloads the page.
        
        function myDeleteButton() {

            let deleteBtn = document.createElement("button") 
            deleteBtn.id = buttonId
            buttonId = deleteBtn.id
            deleteBtn.className = "deleteBtn"
            deleteBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ta bort </i>'
            cardContainer.appendChild(deleteBtn)

            deleteBtn.addEventListener("click", function removeProduct() {
                
            productList.splice(deleteBtn.id, 1)
            productList = JSON.stringify(productList)
            localStorage.setItem("ProdottiInCart", productList)
            location.reload();
            
            })
            
        
        

        }
        myDeleteButton()

        imgContainer.className = "imgContainer"
        textContainer.className = "textContainer"
        productImg.className = "productImg"  
    
        indexContainer.appendChild(cardContainer)
        cardContainer.appendChild(imgContainer)
        imgContainer.appendChild(productImg)
        cardContainer.appendChild(textContainer)
        
        textContainer.appendChild(productTitle)
        textContainer.appendChild(productPrice)

    
        belopp.innerHTML = showTotal    

        removeValue ++

    }
    //shows the number of products in the shopping cart// kundvagnen


    
    document.getElementById("cartSpan").innerHTML = productList.length

    // removes elements and shows that the shopping cart is empty.

    if (productList.length < 1) {
        document.getElementById("summaContainer").style.display = "none"

        let noProdottiInCart = document.createElement("h1")
        noProdottiInCart.innerHTML = "Kundvagnen är tom."
        
        index = document.getElementById("index")
        index.appendChild(noProdottiInCart)

        
    }
    
}   
showCards()

// non va??

function menuItems(){
    // seleziono lo span che deve contenere il numero
    let numSpan = document.getElementById("cart")

    // carico lo storage
    let itemInStorage = localStorage.getItem("ProdottiInCart")

    // trasformo lo storage caricato in precedenza in JSON
    let jsonItemInStorage = JSON.parse(itemInStorage)

    // leggo la quantytà degli elementi nel JSON
    let quantityInstorage = jsonItemInStorage.length

    // inserisco la quantità nello span
    numSpan.textContent=quantityInstorage


// Seleziono i due elementi da rimuovere
let cartItem = document.querySelector('.sideTitle')
let priceContainer = document.getElementById('priceContainer')

// inizio il controllo
// Se quantityInstorage è uguale a zero
if(quantityInstorage == 0) {
    // nascondi i seguenti elementi
    cartItem.style.display = "none"
    priceContainer.style.display = "none"
    // altrimenti
} else {
    // mostrami gli elementi
    cartItem.style.display = "block"
    priceContainer.style.display = "block"
}

}

// richiamo la funzione
menuItems()