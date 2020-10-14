/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import style from "../assets/styles/clean-blog.module.css";
import { Link } from "react-router-dom";
import PostListContainer from "../containers/PostListContainer";
import PagenationsContainer from "../containers/PagenationsContainer";
export default class Home extends Component {
  render() {
    const h1Style = {
      textAlign: "center",
      marginBottom: "12px",
      color: "lightslategray",
    };

    const indexOfLastPost = this.props.currentPage * this.props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.postsPerPage;
    const currentPosts = this.props.posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);

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
          <PagenationsContainer postsPerPage={5} totalPosts={this.props.posts.length} paginate={1} />
        </div>
      </>
    );
  }
}
