export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwttt')) {
        return JSON.parse(localStorage.getItem('jwttt'));
    }else{
        return false;
    }
}