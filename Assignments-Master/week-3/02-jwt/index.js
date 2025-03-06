const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod=require("zod")

const email_scma=zod.string().email()
const password_scma=zod.string().min(6)

/**
 * Generates a JWT for a given email and password.
 *
 * @param {string} email - The email to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the email and password are valid.
 *                        Returns null if the email is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(email, password) {
    const email_response=email_scma.safeParse(email)
    const password_resposnse=password_scma.safeParse(password)
    if(!email_response.success || !password_resposnse.success){
        return null
    }

    const signature= jwt.sign({
        user_email:email,
        user_password:password
    },jwtPassword)
    return signature;
}
const jwt_token=signJwt("sbrijesh@gmail.com","")
console.log(jwt_token)
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
       return jwt.verify(jwt_token,jwtPassword)
    }
    catch{
        return false
    }
}
console.log(verifyJwt(jwt_token))

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    try{
       return jwt.decode(jwt_token)
    }
    catch{
        return false
    }
}
console.log(decodeJwt(jwt_token))

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
