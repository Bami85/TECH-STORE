
function getProducts() {
    
    let cart = localStorage.getItem("cart")         

    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }
    
    let section = document.getElementsByClassName("sectionCart")[0];
    section.innerHTML = ""

    for (var i = 0; i < cart.length; i++) {
        let itemContainer = mainCartContainer(cart[i]);
        
        section.appendChild(itemContainer)
    };
    checkoutContainer(cart)
}


function mainCartContainer(cartItem) {

    let itemContainer = document.createElement("div")
    itemContainer.classList.add("itemContainer")
    
    // image container 
    let cartImgContainer = document.createElement("div")
    cartImgContainer.classList.add("cartImgContainer")

    let itemImg = document.createElement("img")
    itemImg.classList.add("itemImg")
    itemImg.src =  "./assets/" + cartItem.product.image

    cartImgContainer.append(itemImg)
    
    // title container 
    let itemTitleContainer = document.createElement("div")
    itemTitleContainer.classList.add("itemTitleContainer")

    let itemTitle = document.createElement("h1")
    itemTitle.classList.add("itemTitle")
    itemTitle.innerText = cartItem.product.title 

    let quantityOfProduct = document.createElement("h3")
    quantityOfProduct.classList.add("quantityOfProduct")
    quantityOfProduct.innerText = cartItem.quantity + " " + "st" 

    itemTitleContainer.append(itemTitle, quantityOfProduct)

    // price Container 
    let itemPriceContainer = document.createElement("div")
    itemPriceContainer.classList.add("itemPriceContainer")

    let itemPrice = document.createElement("h2")
    itemPrice.classList.add("itemPrice")
    itemPrice.innerText = cartItem.product.price + " kr" 

    itemPriceContainer.append(itemPrice)

    let deleteItemButton = document.createElement("div")
    deleteItemButton.classList.add("deleteItemButton")
    deleteItemButton.addEventListener("click", () => {
        removeItemFromCart(cartItem)
        getItems()
    
    });

    // Remove products in cart Button
    let icon = document.createElement("i")
    icon.className = "far fa-trash-alt"
    icon.classList.add("trashcanCart")

    let buttonRemoveItemTextContainer = document.createElement("div")
    buttonRemoveItemTextContainer.innerText = "Ta bort"

    deleteItemButton.append(icon, buttonRemoveItemTextContainer)


    itemContainer.append(cartImgContainer, itemTitleContainer, itemPriceContainer, deleteItemButton)
    return itemContainer
}

//remove cart items
function removeItemFromCart(cartItem) {
    
    let cart = JSON.parse(localStorage.getItem("cart"));

    for (var i = 0; i < cart.length; i++) {
        if (cartItem.product.title == cart[i].product.title) {
            cart.splice(i, 1);
        }
    }
    cart = JSON.stringify(cart);

    localStorage.setItem("cart", cart);

    getProducts()
}

// Checkout Button 
function checkoutContainer(cart) {

    let totalPrice = 0
    cart.forEach((cartItem) => {
        totalPrice += cartItem.product.price * cartItem.quantity
    })

    let priceAndCheckoutSection = document.getElementsByClassName("sectionPrice")[0]
    priceAndCheckoutSection.innerHTML = ""
 
    let totalPriceContainer = document.createElement("div")
    totalPriceContainer.classList.add("totalPriceContainer")
    totalPriceContainer.innerText = "Totalt pris:" + " " + totalPrice + " " + "kr"
   

    let confirmationButton = document.createElement("div")
    confirmationButton.classList.add("confirmationButton")
    
    let endOfSaleButton = document.createElement("div")
    endOfSaleButton.classList.add("endOfSaleButton")
    endOfSaleButton.innerText = "Slutför ditt köp"
    endOfSaleButton.addEventListener("click", () => {
        alert("Tack för ditt köp!")
        localStorage.removeItem("cart")
        window.location = "index.html"
        
    })

    let checkIcon = document.createElement("i")
    checkIcon.className = "fas fa-check"
    checkIcon.classList.add("check-Icon")
    
    confirmationButton.append(checkIcon, endOfSaleButton)


    priceAndCheckoutSection.append(totalPriceContainer, confirmationButton)
      
}

function getItems() {
    let saveProducts = document.getElementsByTagName("span")[0]

    let cart = localStorage.getItem("cart")
      
    let amount = 0
    
    if(!cart) {
        saveProducts.innerText = amount
        return
    } 

    cart = JSON.parse(cart)
    cart.forEach((cartItem) => {
        amount += cartItem.quantity
    })

    saveProducts.innerText = amount 
}


window.addEventListener("load", () => {
    getItems()
    getProducts()
})