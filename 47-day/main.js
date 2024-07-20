// Generate OTP
function generateOTP() {
    let otp = "";
    for (let i = 1; i <= 6; i++) {
        otp += Math.floor(Math.random() * 9);
    }
    return otp;
}
console.log(generateOTP());
export {};
