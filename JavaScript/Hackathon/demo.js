let a = [-1, 0, 0, 0];
let temp;

b = () => {
    for (let i = 1; i < a.length; i++) {
        temp = c();
        if (temp != 0) {
            a[i] = a[i] + temp;
            console.log(a);
        } else break;
        if (i == 3) {
            i = 0;
        }
    }
    console.log(a)
}

c = () => {
    let hu = a[1] + a[2] + a[3] + a[0];
    if (hu === 0) {
        return 0;
    } else if (hu > 0){
        return -1;
    } else {
        return 1;
    }
}

b();