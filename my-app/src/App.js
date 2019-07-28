import React from "react";
import "./App.css";
// import NewInput from "./Component/wrapperInput";
import Form from "./Component/Form";
import { BindInputText } from "./Component/BindInput";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: [],
      eventId: 1
    };
    // this.onChange.bind(this);
  }

  renderObj = elem => {
    let render = [];
    for (const key in elem) {
      if (elem.hasOwnProperty(key)) {
        render.push(
          <div>
            {key}-{elem[key]}
          </div>
        );
      }
    }
    return render;
  };

  renderFormData = () => {
    let { formData } = this.state;
    return formData.map((elem, index) => (
      <div key={`index-${index}`}>{this.renderObj(elem)}</div>
    ));
  };

  addEvent(item) {
    console.log(123);
    this.setState(state => {
      let { formData, eventId } = state;
      formData.push({ ...item, id:    });
      eventId++;
      return {
        formData,
        eventId
      };
    });
  }

  render() {
    return (
      <div>
        {/* 用户名：
        <NewInput username="jack" age="18" /> */}
        <p>表格的双向绑定</p>
        <Form onSubmit={this.addEvent.bind(this)}>
          <BindInputText type="text" v_model="name" />
        </Form>
        {this.renderFormData()}
      </div>
    );
  }
}

export default Index;
