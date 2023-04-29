import bcrypt from 'bcrypt'

export async function hashPass(password){
  
  const saltValue = 10
  const salt = await bcrypt.genSalt(saltValue)
  const hashPassword = await bcrypt.hash(password,salt) 

  console.log(hashPassword)
}

hashPass(123456)