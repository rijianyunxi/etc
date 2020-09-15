export const sign = function () {
    let a = new Date().getTime() + "";
    let b = a.substring(6);
    let c = parseInt(b);
    return c.toString(16);
}