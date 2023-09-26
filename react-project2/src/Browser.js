import { BrowserRouter } from "react-router-dom"
import App from "./App"

function Browser(){
    return (
        <BrowserRouter basename="/project2_movie">
            <App/>
        </BrowserRouter>
    )
}

export default Browser