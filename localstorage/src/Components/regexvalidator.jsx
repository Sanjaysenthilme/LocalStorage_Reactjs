//emailRegex = /^[^\s@]+@[^\s@]+$/;
//passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

export const emailvalidator =email =>{
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email);
}

export const passwordValidator = password =>{
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,20}$/;
    return passwordRegex.test(password);
}