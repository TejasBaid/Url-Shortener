import React , {useContext} from 'react'
import './ResultPage.scss'
import { ResultTile } from '../result-tile/ResultTile'
import { ResultContext } from '../../result-context'
import { BottomFooter } from '../footer/BottomFooter'
import { TopFooter } from '../footer/TopFooter'

export const ResultPage = () => {
    const {result,setResult} = useContext(ResultContext)
    return (
        <div className="result-page">
            {
                result.length > 0
                ? result.map(res => {
                    return (
                        <div className="rsp">
                        <ResultTile
                         originalUrl={res.originalUrl}
                          resultUrl={res.resultUrl}
                          isCopied={res.isCopied} />

                         
                        </div>
                        
                    )
                })
                : null
            }
            <div className="tftr">
                <TopFooter />
            </div>
            <div className="bfter">
                <BottomFooter /> 
            </div>
        </div>
    )
}
