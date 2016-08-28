#!/usr/bin/env node
"use strict"
//////////////////////////// EXECUTE with "./04.js" ////////////////////////////
// These work in older "maintenance" versions
console.log("This will work with older versions of Node: \n  Node.js version:", process.versions.node);
console.log("  JS V8 Version:", process.versions.v8);

// Switch to Long Term Support (currently v4.5.0)
// nvm use --lts
// Now using node v4.5.0 (npm v3.10.6)


/////////////////////////////////// LEARNING ///////////////////////////////////
// // These DO NOT work in older "maintenance" versions
// // BONUS: Use ES6 Destructuring Assignment to extract the two variables from the versions object

// // "Destructuring is a SyntaxError in Node.js by default in versions earlier than v6. 
//     // Manually enable destructuring inside the program. Hint: edit the shebang"
//     // ANSWER: change the shebang to: "#!/usr/bin/env node --harmony_destructuring" up at the top
//     //  to enable when running older versions of NODE
//     let verObj = process.versions
//     // console.log("verObj", verObj);

//     const { node, v8 } = verObj                     // Destructured Version
//     // console.log("The Whole 9 Yards",verObj );    // The entire object

//     console.log("node destructured",node );
//     console.log("v8 destructured",v8 );


/////////////////////////////////// PRACTICE ///////////////////////////////////
// let myArray = [1, 2, 3, 4, 5, 6, 7]

// let [...aVar] = myArray;
// // let [theNumberOne,,coolStuff,,...aVar] = myArray;

// // aVar === [6, 7]
// // coolStuff === 3

// // console.log(theNumberOne);
// console.log(aVar);
// // console.log(coolStuff);

// function printStuff(a, b, c) {
//   console.log("A:", a);
//   console.log("B:", b);
//   console.log("C:", c);
//   console.log("ARGUMENTS", arguments);
// }

// printStuff(...aVar)
