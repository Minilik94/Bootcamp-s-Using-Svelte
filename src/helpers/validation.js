export function isEmpty(val){
    return val.trim().length === 0;
}
export function isValidEmail(val){
    return new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/").test(val)
}