import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
export default class Pagenations extends Component {
  constructor(props) {
    super(props);
    this.state = { paginate: this.props.paginate };
    this.pageChanged = this.pageChanged.bind(this);
  }

  pageChanged(e) {
    let num = Number(e.target.text);
    if (!!num) {
      console.log(e.target.text);
      this.setState({ paginate: num });
      this.props.changePage(num);
    }
  }

  render() {
    const items = [];
    let active = this.state.paginate;

    for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
      items.push(
        <Pagination.Item key={i} active={i === active}>
          {i}
        </Pagination.Item>
      );
    }

    return (
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul className="pagination" style={{ justifyContent: "center" }}>
            <Pagination onClick={this.pageChanged}>{items}</Pagination>
          </ul>
        </div>
      </div>
    );
  }
}
