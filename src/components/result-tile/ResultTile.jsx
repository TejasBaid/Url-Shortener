import React , {useState} from 'react'

export const ResultTile = ({originalUrl , resultUrl , isCopied}) => {
    const [copy, setCopy] = useState("Copy")
    const [copyClass , setCopyClass] = useState(isCopied ? "copy-btn copied" : "copy-btn")
    const handleCopy = () => {
        setCopy("Copied!")
        navigator.clipboard.writeText(resultUrl)
        setCopyClass("copy-btn copied")
        const timer = setTimeout(() => {
            setCopy("Copy")
            setCopyClass("copy-btn")
          }, 1800);
          return () => clearTimeout(timer);
    }
    return (
        <div>
            <div className="result-tile">
                <div className="original-url">
                    <p className="o-url">{originalUrl}</p>
                </div>
                <div className="line"></div>
                <div className="result-url-section">
                    <div className="result-url">
                        <a className="res-url" href={resultUrl}>{resultUrl}</a>
                    </div>
                    <div className={copyClass}
                     onClick={handleCopy}
                    >
                        {copy}
                    </div>
                </div>
            </div>
        </div>
    )
}
