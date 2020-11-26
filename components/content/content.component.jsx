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
}
