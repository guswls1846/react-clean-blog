import React from "react";
import style from "../../assets/styles/clean-blog.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PostListContainer from "../../containers/PostListContainer";
import PagenationsContainer from "../../containers/PagenationsContainer";

const HomeView = (props) => {
  // console.log(props);
  const h1Style = {
    textAlign: "center",
    marginBottom: "12px",
    color: "lightslategray",
  };
  const store = useSelector((store) => store);
  console.log(store);
  const indexOfLastPost = store.currentPage * store.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - store.postsPerPage;
  const currentPosts = store.posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="container">
        <h1 style={h1Style}>최신 글</h1>

        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <PostListContainer currentPosts={currentPosts}></PostListContainer>

            <div className="clearfix">
              <Link to="/post-write" className={`${style.btn} btn-secondary float-left pointer`}>
                새 글 작성 <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>

              {/* <a className={`${style.btn} btn-secondary float-right pointer`}> 전체 글 보기 &rarr; </a> */}
            </div>
          </div>
        </div>
        <PagenationsContainer postsPerPage={5} totalPosts={store.posts.length} paginate={1} />
      </div>
    </>
  );
};

export default HomeView;
