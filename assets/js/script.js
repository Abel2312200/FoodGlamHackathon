
  // const form = document.querySelector('form');
  // const inputName = document.querySelector('#inputName');
  // const inputPhone = document.querySelector('#inputPhone');
  // const inputMessage = document.querySelector('#messages');
  
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   // Récupérer les valeurs des champs de formulaire
  //   const name = inputName.value;
  //   const phone = inputPhone.value;
  //   const message = inputMessage.value;
  //   // Stocker les valeurs dans le LocalStorage
  //   localStorage.setItem('name', name);
  //   localStorage.setItem('phone', phone);
  //   localStorage.setItem('message', message);

  //   console.log('ok')
  // });  
  

  /**
  * @author : Ngbandaman Abel
  * This part serve to handle the orders
  */
  // products list
  const mealList = [
    // African meals
    {
      idTypeMeal: 1,
      originMeal: "African",
      // list of african meals
      listMeal: [
        {
          idMeal: 1,
          nameMeal: "Placali",
          timeMeal: 60,
          imageMeal: ""
        },
        {
          idMeal: 2,
          nameMeal: "Placali",
          timeMeal: 48,
          imageMeal: ""
        },
        {
          idMeal: 3,
          nameMeal: "Placali",
          timeMeal: 34,
          imageMeal: ""
        },
        {
          idMeal: 4,
          nameMeal: "Placali",
          timeMeal: 73,
          imageMeal: ""
        }
      ]
    },
    // Europeen meals
    {
      idTypeMeal: 2,
      originMeal: "Europe",
      // list of african meals
      listMeal: [
        {
          idMeal: 1,
          nameMeal: "Cookies",
          timeMeal: 30,
          imageMeal: ""
        },
        {
          idMeal: 2,
          nameMeal: "Cookies",
          timeMeal: 15,
          imageMeal: ""
        },
        {
          idMeal: 3,
          nameMeal: "",
          timeMeal: 31,
          imageMeal: ""
        },
        {
          idMeal: 4,
          nameMeal: "Placali",
          timeMeal: 41,
          imageMeal: ""
        }
      ]
    },
    // American meals
    {
      idTypeMeal: 3,
      originMeal: "African",
      // list of american meals
      listMeal: [
        {
          idMeal: 1,
          nameMeal: "Placali",
          timeMeal: 60,
          imageMeal: ""
        },
        {
          idMeal: 2,
          nameMeal: "Placali",
          timeMeal: 48,
          imageMeal: ""
        },
        {
          idMeal: 3,
          nameMeal: "Placali",
          timeMeal: 34,
          imageMeal: ""
        },
        {
          idMeal: 4,
          nameMeal: "Placali",
          timeMeal: 73,
          imageMeal: ""
        }
      ]
    },
    // Asian meals
    {
      idTypeMeal: 4,
      originMeal: "Europe",
      // list of asian meals
      listMeal: [
        {
          idMeal: 1,
          nameMeal: "Cookies",
          timeMeal: 30,
          imageMeal: ""
        },
        {
          idMeal: 2,
          nameMeal: "Cookies",
          timeMeal: 15,
          imageMeal: ""
        },
        {
          idMeal: 3,
          nameMeal: "",
          timeMeal: 31,
          imageMeal: ""
        },
        {
          idMeal: 4,
          nameMeal: "Placali",
          timeMeal: 41,
          imageMeal: ""
        }
      ]
    }
  ]
  
  // Initialisation of array cart 
  let cart = [{
    idMeal: 3,
    nameMeal: "",
    timeMeal: 31,
    quantity: 2
  }];
  
  /**
  * add a new quantity of a meal to the cart
  * @param {*} productId 
  * @param {*} quantity 
  */
  function addToCart(idMeal, nameMeal, timeCook, quantity) {
    const mealAdded = mealAddedAlready(idMeal);
    if (mealAdded.res === true)
      cart[mealAdded.indexMeal].quantity += quantity;
    else
      cart.push({
        idMeal: idMeal,
        nameMeal: nameMeal,
        timeMeal: timeCook,
        quantity: quantity
      })
      console.log(cart)
    return cart;
  }
  
  /**
  * check if a meal added in the part already
  * @param {*} idMeal 
  * @returns {boolean}
  */
  function mealAddedAlready(idMeal) {
    let response ={
      res : false,
      indexMeal : 0
    };
    for (let meal = 0; meal < cart.length; meal++) {
      if (cart[meal].idMeal === idMeal) {
        response = {
          res : true,
          indexMeal : meal
        }
        break;
      }
    }
    return response;
  }
  
  /**
  * delete a meal in the cart
  * @param {*} productId 
  * @returns {Array}
  */
  function removeFromCart(productId) {
    delete cart[productId];
  }
  
  
  /**
  * update the quantity of a meal in the cart
  * @param {*} productId 
  * @param {*} quantity 
  */
  function updateCartQuantity(productId, quantity) {
    cart[productId] = quantity;
  }
  
  /**
  * retrieve the list of meal in the cart
  * @param 
  * @returns {Array}
  */
  function getCart() {
    return cart;
  }

/**
 * reset datas 
 * @param 
 * @returns {Array}
 */
function resetPanner(){
  cart = [];
  return cart;
}
  
  /**
   * @param 
   * @returns {Array}
   */
  function getAllAfricanMeal() {
    return listMeal[0].listMeal;
  }
  
  
  /**
   * this part is related the menu section :
   * It permits to retrieve ours datas (meals according to theirs origins)
   */
  
  /**
   * @param 
   * @returns {Array}
   */
  function getAllEuropeanMeal() {
    return listMeal[1].listMeal;
  }
  
  /**
   * @param 
   * @returns {Array}
   */
  function getAllAmericanMeal() {
    return listMeal[2].listMeal;
  }
  
  /**
   * @param 
   * @returns {Array}
   */
  function getAllAsianMeal() {
    return listMeal[3].listMeal;
  }