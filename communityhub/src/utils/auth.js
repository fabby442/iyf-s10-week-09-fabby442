export const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};