import { add, subtract, divide, multiply } from './calc/index';

add(3, 4, 5, 6).then(res => console.log(`sum: ${res}`));

subtract(4, 2, 1).then(res => console.log(`subtraction: ${res}`));

divide(6, 2).then(res => console.log(`division: ${res}`));

multiply(2, 2, 2, 2).then(res => console.log(`multiplication: ${res}`));
