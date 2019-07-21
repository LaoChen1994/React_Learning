import React from "react";
// 上传file始终是一个非受控组件，所以只能通过非受控组件的方式查找上传文件

class FileInput extends React.Component {
  public fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    // highlight-range{3}
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event: React.MouseEvent<HTMLFormElement>): void {
    // highlight-range{4}
    event.preventDefault();
    if (
      this.fileInput &&
      this.fileInput.current &&
      this.fileInput.current.files &&
      this.fileInput.current.files.length
    ) {
      alert(`Selected file - ${this.fileInput.current.files[0].name}`);
      console.log(this.fileInput.current.files);
    }
  }

  render() {
    // highlight-range{5}
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
