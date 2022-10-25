const myStates = [
    "Rajastan",
    "Delhi", 
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtara",
];

// for-each loop is considered as method in javaScript..

var i =0;

for(; ;)
                                                                     //  confusion
// {                                           
//     if(i > 3) break;
//     console.log(i);
//     i++;
// }

myStates.forEach((s) => (console.log(s)));