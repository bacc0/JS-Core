// BUDGET CONTROLLER
let budgetController = (function () {

     // some Code

})();

// UI CONTROLLER
let UIController = (function () {
     
     return {
          getInput: function(){

               return {
                    type : document.querySelector('.add__type').value, // Will be ether inc or exp
                    description : document.querySelector('.add__description').value,
                    value : document.querySelector('.add__value').value

               }
          }
     }
})();


// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

     let ctrlAddItem = function (){
          // 1. Get  the field input data

          let input = UICtrl.getInput();
          console.log(input);
          // 2. Add the item to the budget controller
          // 3. Add the item to the UI
          // 4. Calculate the budget
          // 5. display the budget on the UI
     }

     document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

     document.addEventListener('keypress', function(event) {
          if (event.keyCode === 13 || event.which === 13){

               ctrlAddItem();
          } 
     });

})(budgetController, UIController);


