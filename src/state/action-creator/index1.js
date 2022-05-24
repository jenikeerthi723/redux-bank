
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "hi")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}