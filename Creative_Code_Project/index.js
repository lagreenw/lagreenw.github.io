//check if Node app is working
console.log('hello BEAUTIFUL world!');

//initialize & log into Bumble
var BumAPI = require('bumbleapi')('8057911911','jackjack');
BumAPI.startup().then((res) => {console.log(res);})
//should return "login successful"
