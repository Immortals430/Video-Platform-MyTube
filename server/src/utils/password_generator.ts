import bcrypt from "bcrypt"
import * as crypto from 'crypto'

export const generatePassword = async () => {
    return await bcrypt.hash(crypto.randomUUID(), 10)
}