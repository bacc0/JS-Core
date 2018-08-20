// BUDGET CONTROLLER
let budgetController = (function () {

     // some Code

})();

// UI CONTROLLER
let UIController = (function () {
     // some Code
})();


// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

     let ctrlAddItem = function (){
          // 1. Get  the field input data
          // 2. Add the item to the budget controller
          // 3. Add the item to the UI
          // 4. Calculate the budget
          // 5. display the budget on the UI
          console.log('ddd');
     }

     document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

     document.addEventListener('keypress', function(event) {
          if (event.keyCode === 13 || event.which === 13){

               ctrlAddItem();

          } else {
               console.log('Not Enter');
          }
     });

})(budgetController, UIController);


