//logic behind envelope budgeting

let income = 0;
let rent = 0;
let grocery = 0;
let gas = 0;
let utilities = 0;
let personalCare = 0;
let savings = 0;


const assignEnvelopes = (income) => {
    rent = income * .4;
    grocery = income *.15;
    utilities = income * .1;
    gas = income *.05
    savings = income * .2;
    personalCare = income * .1;
    //log suggestions
    console.log(`With an income of $${income}, we humbly suggest that you allocate the following: `);
    console.log(`Rent: $${rent.toFixed(2)}.`);
    console.log(`Utilities: $${utilities.toFixed(2)}.`);
    console.log(`Grocery: $${grocery.toFixed(2)}.`);
    console.log(`Gas: $${gas.toFixed(2)}.`);
    console.log(`Personal Care: $${personalCare.toFixed(2)}.`);
    console.log(`Savings: $${savings.toFixed(2)}.`); 
}
assignEnvelopes(1000);

// class Envelopes{
//     constructor(paycheck, rent, grocery, gas, utilities, personalCare, savings){
//         this._paycheck = paycheck;
//         this._rent = rent;
//         this._grocery = grocery;
//         this._gas = gas;
//         this._utilities = utilities;
//         this._personalCare = personalCare;
//         this._savings = savings;
//     }
//     get paycheck(){
//         return this._paycheck;
//     }
//     set paycheck(newPaycheck){
//         this._paycheck = newPaycheck;
//     }
//     get rent(){
//         return this._rent;
//     }
//     set rent(newRent){
//         this._rent = newRent;
//     }
//     get grocery(){
//         return this._grocery;
//     }
//     set grocery(newGrocery){
//         this._grocery = newGrocery;
//     }
//     get gas(){
//         return this._gas;
//     }
//     set gas(newGas){
//         this._gas = newGas;
//     }
//     get utilities(){
//         return this._utilities;
//     }
//     set utilities(newUtilities){
//         this._utilities = newUtilities;
//     }
//     get personalCare(){
//         return this.personalCare;
//     }
//     set personalCare(newPersonalCare){
//         this._personalCare = newPersonalCare;
//     }
//     get savings(){
//         return this._savings;
//     }
//     set savings(newSavings){
//         this._savings = newSavings;
//     }
//     mustHaveHome(paycheck, rent){
//         let moneyLeft = paycheck - rent;
//         console.log("Rent is essential to having a place to live, so we just took that from your paycheck so you always have a home.");
//         console.log(`We will caclulate the rest based off of the amount left. You have $${moneyLeft.toFixed(2)}`);
//     };
// };
// const EnvelopeOne = new Envelopes(500, 100, 90, 20, 90, 50, 150);
// EnvelopeOne.mustHaveHome(500, 100);
