const accountId = 123456;
let accountEmail = "new@gmail.com"
var accountPassword = "123";
accountCity = "Jaipur";
let accountState;

/* we usee const for variables that we do not want to change
   we use let for variables that we want to change
   we use var but its not recommended nowadays because of issue of block scope and global scope
*/

// accountId = 654321; // This will cause an error because accountId is a constant
// accountEmail = "updated@gmail.com"; this will update the email with the new value as it is a let variable. we do not use var nowadays because of issue of block scope and global scope
accountPassword = "456";
accountCity = "Delhi";
accountEmail = "updated@gmail.com";
console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
