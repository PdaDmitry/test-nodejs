import dotenv from 'dotenv';

dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];
  if (value) return value;
  console.log(value);
  console.log(value);

  if (defaultValue) return defaultValue;
  console.log(defaultValue);
  console.log(defaultValue);
  throw new Error(`Missing: process.env['${name}'].`);
}
