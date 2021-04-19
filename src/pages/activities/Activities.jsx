import { useEffect, useRef } from "react"

export const Activities = () => {
    
    const ref = useRef();
    
    useEffect(() => {
        console.log(ref.current.clientHeight);
    }, [])
    return (
        <div style={{ height: 700 }} ref={ref} >
            Activities
        </div>
    )
}
