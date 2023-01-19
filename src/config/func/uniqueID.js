import { v4 as uuid } from 'uuid';

const unique_id = uuid();
const small_id = unique_id.slice(0, 30)

// export function ID(prefix="id"){
//     return `${prefix}${small_id}`;
// }

// export function RandomID(){
//     let tempID = Math.random().toString;
//     let uid = tempID.substring(2, tempID.length-1);
//     return uid;
// }

export function securePassword() {
    // GOOD: the random suffix is cryptographically secure
    var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0];
    var password = suffix + small_id;
    console.log(password)
    return password;
}

// export function ReactID(){
//     const id = useId();
//     return id;
// }

// export function randomString(length){
//     var str = '';
//     for( var i = 0; i < length; i++){
//         var rand = Math.floor(Math.random() * 62);
//         var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
//         str += String.fromCharCode(charCode);
//     }

//     return str;
// }

// let lastid = 0;

// export function ID(prefix='id'){
//     lastid++;
//     return `${prefix}${lastid}-${randomString(15)}-${randomString(5)}`;
// }