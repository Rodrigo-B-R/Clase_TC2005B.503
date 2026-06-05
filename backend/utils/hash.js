import CryptoJS from 'crypto-js'


const SALT_LENGTH = 16;
export const hashPassword = (password) => {
    const salt = CryptoJS.lib.WordArray.random(SALT_LENGTH / 2).toString()
    const hash = CryptoJS.SHA256(password + salt).toString()

    return `${salt}${hash}`
}

export const verifyPassword = (password, stored) => {
    const salt = stored.substring(0, SALT_LENGTH)
    const hash = stored.substring(SALT_LENGTH)

    const inputHash = CryptoJS.SHA256(password + salt).toString()
    return inputHash === hash
}
