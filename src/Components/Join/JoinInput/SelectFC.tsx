//OBJ & FC
const unselectedObj = {
    all: false,
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    mkobj_all: false,
    mkobj1: false,
    mkobj2: false,
    mkobj3: false,
    mk2: false
};
const selectedObj = {
    all: true,
    op1: true,
    op2: true,
    op3: true,
    op4: true,
    mkobj_all: true,
    mkobj1: true,
    mkobj2: true,
    mkobj3: true,
    mk2: true
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

const mkObjSelectFC = (obj) => {
    const newObj = {...obj};

    if( obj['mkobj_all'] === false ) {
        newObj['mkobj_all'] = true;
        newObj['mkobj1'] = true;
        newObj['mkobj2'] = true;
        newObj['mkobj3'] = true;

        for (const [key, value] of Object.entries(newObj)) {
            if( key !== 'all' ){
                if( value === false ) return newObj;
            };
        };
        return selectedObj;
    } else {
        newObj['all'] = false;
        newObj['mkobj_all'] = false;
        newObj['mkobj1'] = false;
        newObj['mkobj2'] = false;
        newObj['mkobj3'] = false;
        
        return newObj;
    };
};

const mkOptionSelectFC = (obj, key) => {
    const newObj = {...obj};
    
    if( obj[key] === false ){ //false -> true
        newObj['mkobj_all'] = true;
        newObj[key] = true;

        for (const [key, value] of Object.entries(newObj)) {
            if( key !== 'all' ){
                if( value === false ) return newObj;
            };
        };
        
        newObj['all'] = true;

    } else { //true -> false

        newObj['all'] = false;
        newObj['mkobj_all'] = false;
        newObj[key] = false;

        const arr = [newObj['mkobj1'], newObj['mkobj2'], newObj['mkobj3']];
        arr.forEach( (v) => {
            if(v === true) {
                newObj['mkobj_all'] = true;
            };
        });

    }

    return newObj;
};



export { selectedObj, unselectedObj, reverseValueFC, mkObjSelectFC, mkOptionSelectFC };