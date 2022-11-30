import bcrypt from 'bcrypt'

// generate salt pass
export const generateHassPass = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}