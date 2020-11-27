import "./content.styles.scss";

export default function Content({ BgColor, left, title, blockquote, button }) {
    return (
        <div
            className="content-container"
            style={
                BgColor
                    ? {
                        backgroundColor: `${BgColor}`,
                    }
                    : {}
            }
<<<<<<< HEAD
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
=======
        >
            <div className="content">
                {left ? (
                    <div className="content__left">
                {left}
            </div>
                ):null}
                <div className="content__right">
                    <h1>{title}</h1>
                    {blockquote}
                    {button}
                </div>
            </div>
        </div>
    );
>>>>>>> 8521c68c81d5cf4ff85bab7474935cf64724c4f4
}
