export const calcualte = (x, y, op) => {
    switch (op) {
        case '+' :
            return y + x;
        case '-' :
            return y - x;
        case '*' :
            return y * x;
        case '/' :
            return y / x;
        default:
            return 0;
    }
}