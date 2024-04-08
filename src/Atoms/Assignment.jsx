import { atom } from "recoil";
export const Assignment = atom ({
     key : 'Assignment',
     default : {
        name : " " ,
        val : -1
     }
})
//  Atoms represent units of state in Recoil. They are used to store individual pieces of data, such as a boolean value, string, number, object, or array. Atoms are created using the atom function provided by Recoil.