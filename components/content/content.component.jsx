import "./content.styles.scss";

import BlockQuote from "../block-quote/block-quote.component";
import CustomButton from "../custom-button/custom-button.component";
import Logo from "../logo/logo.component";

export default function Content({ children, ...props }) {
    return (
        <div
            className="content-container"
            style={
                props.BgColor
                    ? {
                        backgroundColor: `${props.BgColor}`,
                    }
                    : {}
            }
        >
            <div className="content">
                <div className="content__left">
                <Logo width={120} height={40} />
                </div>
                <div className="content__right">
                    <h1>Kumaşın Mimarı...</h1>
                    <BlockQuote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</BlockQuote>
                    <CustomButton scrollDown>
                        <div className="button-content"><span>Daha Fazlası</span><span>&#8594;</span></div>
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}
