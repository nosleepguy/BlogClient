import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function Slider(props) {
    const { data, title, getAction } = props;
    const [offsetLeft, setOffsetLeft] = React.useState();
    const [clientWidth, setClientWidth] = React.useState();
    const handleClick = (e) => {
        setOffsetLeft(e.target.offsetLeft);
        setClientWidth(e.target.clientWidth);
        let nameAction = e.target.innerText;
        getAction(nameAction)
    };
    return (
        <div className="category df">
            <div className="left mgt-10">{title}</div>
            <div className="right df">
                <div className="select df">
                    {data?.map((ele, index) => (
                        <p
                            key={index}
                            className="bd-radius-5 hover-secondary-bg mgt-10 active"
                            onClick={handleClick}
                        >
                            {ele}
                        </p>
                    ))}
                </div>
                <div
                    className="slider bd-radius-5"
                    style={{
                        left: `${offsetLeft + (clientWidth - 40) / 2}px`,
                    }}
                ></div>
            </div>
        </div>
    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    getAction: PropTypes.func.isRequired,
};

export default Slider;
