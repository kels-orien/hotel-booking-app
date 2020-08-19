import NextHead from "next/head"
import SeoHead from "./seohead"


const Header = ({ children, title, description}) => {
    return (
        <React.Fragment>
            <SeoHead title={title} description={description}/>
            <h1>Header</h1>
            {children}
        </React.Fragment>
    )
}

export default Header
