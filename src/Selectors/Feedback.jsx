import { selector } from "recoil";
import { Assignment } from "../Atoms/Assignment";

export const Feedback=selector({
    key : 'Feedback',
    get : (({get})=>{
        let value=get(Assignment).val;
        if(value===-1){
            return 'Fill the details to get a Feedback'
        }else if(value===0){
            return 'You are Brilliant'
        }else if(value===1){
            return 'Come on , You can do it'
        }else if(value===2){
            return 'Need Improvements'
        }else if(value===3){
            return 'Need Revision'
        }else if(value===4){
            return 'No Internship'
        }else if(value===5){
            return 'You have Failed'
        }else{
            return "You have Failed"
        }
    })
})
// Selectors are functions that derive computed state from one or more atoms or other selectors. They allow you to create derived state that depends on the current value of atoms. Selectors are created using the selector function provided by Recoil