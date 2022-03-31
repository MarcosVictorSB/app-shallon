import bcrypt from 'bcrypt';
const ROUNDS =  10;

export const createHash = (password: string): string => {
  const salt = bcrypt.genSaltSync(ROUNDS);
  return bcrypt.hashSync(password, salt);
}

export const compareHash = (password: string, customerPassword: string): boolean => {
  return bcrypt.compareSync(password, customerPassword);
}