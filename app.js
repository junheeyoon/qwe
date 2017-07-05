'use strict';

module.exports = function (requestNumber) {
  'use strict';

module.exports = function (requestNumber) {
  
if(requestNumber % 15 == 0) return 'fizzbuzz';
else if(requestNumber % 5 == 0) return 'buzz';
else if(requestNumber % 3 == 0) return 'fizz';  

else return requestNumber;
}
}
