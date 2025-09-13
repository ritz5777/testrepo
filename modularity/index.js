// import data from "./one.js";
// import { greet_user , join_name } from "./two.js";

// console.log(data);

// greet_user("ritika");

// join_name("sahil","khan")
// ===========================================
// import user_data from "./one.js";
// // redeclaring the data for this file
// const data = "something"
// console.log(data,user_data)
// import { greet_user as greet } from "./two.js";
// greet("ritika");
import { data1 } from "./one.js";
console.log(data1);
 
// import { greet } from "./two.js";
// console.log(greet);

import { multiply } from "./two.js";
const result = multiply(2, 3, 4);
console.log(result);







// default export -> one thing to export
// normal export -> when there are multiple things to export


// default import
// import data from './file_name.js'

// normal import
// import {function_name,variable_name} from './file_name.js'


// default
// import my_data from './file_name.js'

//normal export
// import {first_function as fsFunc , second_func as sec} from './file_name.js'