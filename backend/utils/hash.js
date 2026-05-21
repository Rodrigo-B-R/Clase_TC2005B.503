import CryptoJS from 'crypto-js'


const random_seed= 16;
export const hashPassword = (password) => {
    const salt = CryptoJS.lib.WordArray.random(random_seed).toString()
    const hash = CryptoJS.SHA256(password + salt).toString()
    return `${salt}:${hash}`
}

export const verifyPassword = (password, stored) => {
    const [salt, hash] = stored.split(':')
    const inputHash = CryptoJS.SHA256(password + salt).toString()
    return inputHash === hash
}
