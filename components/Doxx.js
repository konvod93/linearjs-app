import Link from "next/link";
import FootStyles from "./UI/FootStyles";

const Doxx = () => {
    return (
        <FootStyles>
            <div className='footerlist'>
                <div className='footlisthead'>DOCS</div>
                <Link href="/"><a>How To Use?</a></Link>
                <Link href="/"><a>Useful Things</a></Link>
                <Link href="/"><a>Installation</a></Link>
                <Link href="/"><a>Sintaxys</a></Link>
                <Link href="/"><a>Modules</a></Link>
                <Link href="/"><a>Examples</a></Link>
            </div>
        </FootStyles>
    )
}

export default Doxx;