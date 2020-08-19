import React,{useState,useEffect} from 'react'

function useCount() {



    const [count,setCount] = useState(0)

    const incrementCount = () =>{
        setCount(prevCount => prevCount+1)
    }
    const dencrementCount = () =>{
        setCount(prevCount => prevCount-1)
    }

    useEffect(()=>{
        if(count<0){
            setCount(0)
      
        }
      
    },[count])


    return [count,incrementCount,dencrementCount]
}

export default useCount
