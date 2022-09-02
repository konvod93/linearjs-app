import Image from "next/image";
import FootStyles from "./UI/FootStyles";

const Linxx = () => {
    return (
        <FootStyles>
            <div className="footerlist">
                <div className="footlisthead">LINKS</div>
                <a href="#" target="_blank">Github <Image src="/External_Link_icon-icons.com_55915.svg" width={20} height={20} alt="ext link" /></a>
                <a href="#">Telegram <Image src="/External_Link_icon-icons.com_55915.svg" width={20} height={20} alt="ext link" /></a>
                <a href="#">Facebook <Image src="/External_Link_icon-icons.com_55915.svg" width={20} height={20} alt="ext link" /></a>
                <a href="#">Stack Overflow <Image src="/External_Link_icon-icons.com_55915.svg" width={20} height={20} alt="ext link" /></a>
                <a href="#">Discussion Forums <Image src="/External_Link_icon-icons.com_55915.svg" width={20} height={20} alt="ext link" /></a>
            </div>
        </FootStyles>
    )
}

export default Linxx;