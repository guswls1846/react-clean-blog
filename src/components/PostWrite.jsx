import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class PostWrite extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", content: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ title: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event });
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));

    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="control-group">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={this.handleNameChange} />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group">
                  <label>Author</label>
                  <input type="text" className="form-control" placeholder="Author" value={this.state.author} onChange={this.handleAuthorChange} />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group">
                  <label>Content</label>
                </div>
              </div>
              <div id="editor"></div>
              <CKEditor
                id="editor"
                editor={ClassicEditor}
                config={{
                  cloudServices: {
                    tokenUrl: "https://75378.cke-cs.com/token/dev/498d6c387e54cae9c9ea2da99950e0177cb62aa7667b9fa1e874339800fa",
                    uploadUrl: "https://75378.cke-cs.com/easyimage/upload/",
                  },
                }}
                onInit={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.handleContentChange(data);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />

              <br />

              {/* <div className="alert alert-success pointer" *ngIf="success" routerLink="/home" role="alert">You're entry was successfully posted! Click here to go home.</div>
                <div className="alert alert-danger pointer" *ngIf="failure" routerLink="/author-post" role="alert">
                  An unexpected error occured while submitting your entry. Please refresh your browser and try again.
                </div> */}
              <div className="form-group text-center mx-auto">
                <button className="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
