export const checkValidData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|.*\W)(?!.*\n).{8,}$/;
  
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
  
    if (!isEmailValid) return "Email ID is not valid!!";
    if (!isPasswordValid) return "Password is not valid!!";
    return null;
  };
  