import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview";
import "./style.css";

import { getListPostRequest } from "./../../action";
import Slider from "../../components/slider";

function Home(props) {
    const { listPost, getListPost } = props;
    const [listPostState, setListPostState] = React.useState();

    React.useEffect(() => {
        getListPost();
    }, []);
    React.useEffect(() => {
        setListPostState(listPost);
    }, [listPost]);

    return (
        <div>
            <Header />
            <div className="homepage df">
                <Slider />
                {listPostState
                    ? listPostState.map((post, index) => {
                          return (
                              <PostPreview
                                  key={index}
                                  key2={index}
                                  data={post}
                              />
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}

Home.propTypes = {
    listPost: PropTypes.array,
    getListPost: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        listPost: state.post,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getListPost: () => {
            dispatch(getListPostRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
