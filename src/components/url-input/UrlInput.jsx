import React , {useState , useContext} from 'react'
import DesktopInput from '../../images/desktop-input.svg'
import axios from 'axios';
import './UrlInput.scss'
import { ResultContext } from '../../result-context'

export const UrlInput = () => {
    // TODO: Convert this to a global context
    const [url,setUrl] = useState("")
    const {result,setResult} = useContext(ResultContext)
    // ! The input box container is the positioning tag
    const [errMsg , setErrMsg] = useState("hidden err-text")//? remove hidden
    const [boxCont , setBoxCont] = useState("input-box-containe")//?container
    const [urlBox , setUrlBox] = useState("url-box") //?err

    const HandleSubmit =  (e) => {
        e.preventDefault()
        if(url === ""){
            setErrMsg("err-text");
            setBoxCont("input-box-container")
            setUrlBox("err url-box")
        }else{
            setErrMsg("hidden err-text");
            setBoxCont("input-box-containe")
            setUrlBox("url-box")
            setUrl("")
            axios.post(`https://rel.ink/api/links/`, { "url" : url})
            .then(res => {
                var hashId = res.data.hashid
                console.log(hashId)
                
                const newObj = {
                    originalUrl:url,
                    resultUrl: `https://rel.ink/`+res.data.hashid,
                    isCopied:false
                }
                setResult([newObj , ...result])
                
                    
                
                
            })
            
            
        }
    }
    
    
    
    
    return (
        
        <div className="">
            <div className="inpt">
            <div className="url-input-c" style={{ backgroundImage: "url(" + DesktopInput + ")",}}>
            
            
                <form className="input-center" onSubmit={HandleSubmit}>
                <div className={boxCont}>
                    <input className={urlBox} onChange={e => setUrl(e.target.value)} value={url} type="text" placeholder="Shorten a link here..." />
                    <p className={errMsg}>Please enter a link!</p>
                </div> 
                <button className="submit-btn" type="submit"><div className="shorten-btn">Shorten It!</div></button>
                </form>
            
            
        </div>
        </div>
        </div>
    )
}
