import React , {useState , createContext} from 'react'

export const ResultContext = createContext()

export const ResultContextProvider = (props) => {
    const [result, setResult] = useState([
        {
            originalUrl:"https://www.google.com",
            resultUrl:"https://rel.ink/RgeNkO",
            isCopied: false,
        },
        
    ])
    return (
        <ResultContext.Provider value={{result,setResult}}>
            {props.children}
        </ResultContext.Provider>
    )
}

