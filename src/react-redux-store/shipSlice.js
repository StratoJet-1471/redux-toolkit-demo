import { createSlice } from '@reduxjs/toolkit';

const shipSlice = createSlice({
    name: "ship",

    initialState: { 
        course: "north",
        speed: 0
    },
    //Чтобы понять, что здесь state, см. store.js, где shipSlice.reducer комбинируется с другими редьюсерами через combineReducers().
    reducers: {
/*
        setCourse: (state = this.initialState, action) => { 
            return { 
                course: action.payload,
                speed: state.speed 
            }; 
        },
        setSpeed: (state, action) => { 
            return { 
                speed: action.payload,
                course: state.course 
            }; 
        }
*/
    //Я думаю, эти редьюсеры создаются с помощью createReducer(), поэтому внутри них допустим код вида state.course = action.payload - хотя созданный "вручную" редьюсер должен именно возвращать новое состояние, как это делается выше в закомментированном коде.
        setCourse: (state = this.initialState, action) => { state.course = action.payload; },
        setSpeed: (state, action) => { state.speed = action.payload; },
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
export const {setCourse, setSpeed} = shipSlice.actions;
export const shipReducer = shipSlice.reducer;