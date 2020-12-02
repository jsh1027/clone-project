//OBJ & FC
const unselectedObj = {
    all: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false
};
const selectedObj = {
    all: true,
    op1: true,
    op2: true,
    op3: true,
    op4: true
};

//reverseValueFC
const reverseValueFC = (obj, key) =>{
    const newObj = {...obj};
    if(obj[key] === true) {
        newObj[key] = false;
        newObj["all"] = false;
    } else {
        newObj[key] = true;     
        for (const [key, value] of Object.entries(newObj)) {
            if( key !== 'all' ){
                if(value === false ) return newObj;
            }
        }
        return selectedObj;
    }
    return newObj;
};    



export { selectedObj, unselectedObj, reverseValueFC };