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
      <Logo width={150} height={50} />
      <div className="content-body">
        <h2>test</h2>
        <BlockQuote>test</BlockQuote>
      </div>
      <CustomButton scrollDown inverted>
        <i>&#8594;</i>
      </CustomButton>
    </div>
  );
}
