const characters = ['Michael Scott', 'Jim Halpert', 'Pam Halpert', 'Dwight Shrute', 'Meredith Palmer', 'Andy Bernard', 'Phyllis Laplin'];
const [manager, salesman_1, receptionist, salesman_2, ...others] = characters;

console.log( 'manager: ' + manager );
console.log( 'salesman_1: ' + salesman_1 );
console.log( 'receptionist: ' + receptionist );
console.log( 'salesman_2: ' + salesman_2 );
console.log( 'others: ' + others );