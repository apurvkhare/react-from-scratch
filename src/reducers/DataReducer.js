

export const initialState = {
    status: "idle",
    data: null,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCHING":
            return{
                ...state,
                status: "pending",
                error: null,
                data: null
            }
        
        case "SUCCESS":
            return{
                ...state,
                status: "resolved",
                data: action.payload.data,
                error: null
            }

        case "FAILURE":
            return{
                ...state,
                status: "rejected",
                data: null,
                error: "Error fetching data"
            }

        default:
            state
    }
}

export default dataReducer