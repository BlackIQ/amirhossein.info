export const setSession = (token) => {
    return {
        type: "SET_SESSION",
        payload: token,
    };
}

export const unsetSession = () => {
    return {
        type: "UNSER_SESSION",
    }
}