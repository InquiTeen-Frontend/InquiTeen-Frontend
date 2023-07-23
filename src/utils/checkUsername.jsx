export const checkUsername = (username) =>{
    const usernameRegex = /^[A-Za-z0-9_-]+$/;

    return usernameRegex.test(username)
}