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
        <Logo width={120} height={40} />
        <div className="content-body">
          <h1>Kumaşın Mimarı...</h1>
          <BlockQuote>test</BlockQuote>
          <CustomButton scrollDown inverted>
            <i>&#8594;</i>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
