// Generate OTP

function generateOTP(): string {
    let otp = ""
    for (let i = 1; i <= 6; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    return otp
}

console.log(generateOTP());