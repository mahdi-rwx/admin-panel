import { Dispatch, SetStateAction } from "react"

type SetValue<T> = Dispatch<SetStateAction<T>>
// function useLocalStorage<T>(key:string,initialValue:T):[T,SetValue<T>] {    
// }
function useLocalStorage<T>(key:string,initialValue:T) {    
}
export default useLocalStorage