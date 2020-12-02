interface EmailProps {
    email: string,
    msg: string
};

interface PWProps {
    password: string,
    msg: string
};

interface SelectProps {
    isChecked: boolean,
    msg: string
};


const checkEmail = ({email, msg}: EmailProps)=>{
    if(email.trim()==='' || email.trim().length < 4){
        msg = '이메일을 입력해주세요';
        return {check: false, msg: msg};
    } else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(email))){
        msg = '이메일 형식을 확인해주세요';
        return {check: false, msg: msg};
    } else {
        msg = '다음';
        return {check: true, msg: msg};
    }
};

const checkPW = ({password, msg}: PWProps)=>{
    if(password.trim()==='' || password.trim().length < 2){
        msg = '비밀번호를 입력해주세요';
        return {check: false, msg: msg};

    } else if(!(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,10}$/
            .test(password))){
        msg = '비밀번호 형식을 확인해주세요';
        return {check: false, msg: msg};

    } else {
        msg = '다음';
        return {check: true, msg: msg};
    }
};

const checkSelect = ({isChecked, msg}: SelectProps)=>{
    if( isChecked() === false ){
        msg = '필수 동의사항을 확인해주세요';
        return {check: false, msg: msg};
    } else {
        msg = '동의';
        return {check: true, msg: msg};
    }
};


export { checkEmail, checkPW, checkSelect };