const API_KEY = "AIzaSyCtkbi70pKL5bkJhxm8LOTbvUS8Ib36kf0"

export const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
export const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
export const GET_USER = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`
export const FORGOT_PASSWORD = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`



export const USER = "https://bodybook-4ef51-default-rtdb.asia-southeast1.firebasedatabase.app/users"