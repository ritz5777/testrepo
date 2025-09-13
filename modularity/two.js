const greet_user = (user="sir/mam") =>{
    console.log(`welcome ${user}`);
}

const join_name = (firstname,lastname) =>{
    console.log(firstname + " " + lastname);
}

export {greet_user,join_name};


// export const greet_user = (user="sir/mam") =>{
//     console.log(`welcome ${user}`);
// }

// export const join_name = (firstname,lastname) =>{
//     return firstname + " " + lastname;
// }
 
export function multiply(a,b,c) {
    return a*b*c;
    
}