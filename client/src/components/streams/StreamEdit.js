import React from "react";
// import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{ title: "hi", description: "hey" }}
        /> */}

        {/* with Lodash */}
        {/* <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        /> */}
        {/* without Loadash */}
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: `${this.props.stream.title}`,
            description: `${this.props.stream.description}`,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
// // Commented as to introduce Stream Form to take control of common of Stream Create and Stream Edit
// // import React from "react";
// // import { connect } from "react-redux";
// // import { fetchStream } from "../../actions";

// // class StreamEdit extends React.Component {
// //   componentDidMount() {
// //     this.props.fetchStream(this.props.match.params.id);
// //   }
// //   render() {
// //     if (!this.props.stream) {
// //       return <div>Loading...</div>;
// //     }
// //     return <div>{this.props.stream.title}</div>;
// //   }
// // }

// // const mapStateToProps = (state, ownProps) => {
// //   return { stream: state.streams[ownProps.match.params.id] };
// // };

// // export default connect(mapStateToProps, { fetchStream })(StreamEdit);
