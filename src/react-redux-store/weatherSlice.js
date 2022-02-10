import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: "weather",
    initialState: "calm",
    //Чтобы понять, что здесь state, см. store.js, где weatherSlice.reducer комбинируется с другими редьюсерами через combineReducers().
    reducers: {
        setWeather_Calm: () => "calm",
        setWeather_Storm: () => "storm",
    }
});

/*
Значение, возвращаемое ф-ей createSlice() (см. https://redux-toolkit.js.org/api/createSlice#return-value):
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>
}
Each function defined in the reducers argument will have a corresponding action creator generated using createAction 
and included in the result's actions field using the same function name.
The generated reducer function is suitable for passing to the Redux combineReducers function as a "slice reducer".
*/
export const {setWeather_Calm, setWeather_Storm} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;