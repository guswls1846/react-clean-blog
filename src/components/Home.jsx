/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import style from "../assets/styles/clean-blog.module.css";
import PostList from "./PostList";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    const h1Style = {
      textAlign: "center",
      marginBottom: "12px",
      color: "lightslategray",
    };

    return (
      <>
        <div className="container">
          <h1 style={h1Style}>최신 글</h1>

          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {/* <div *ngFor="let post of posts$ | async">
            <app-preview-post [post]="post"></app-preview-post>
            <hr />
            </div> */}
              <PostList></PostList>

              <div className="clearfix">
                <Link to="/post-write" className={`${style.btn} btn-secondary float-left pointer`}>
                  새 글 작성 <i className="fa fa-plus" aria-hidden="true"></i>
                </Link>

                {/* <a className={`${style.btn} btn-secondary float-right pointer`}> 전체 글 보기 &rarr; </a> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
