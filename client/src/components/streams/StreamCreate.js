import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// // Commented as to introduce Stream Form to take control of common of Stream Create and Stream Edit
// // import React from "react";
// // import { Field, reduxForm } from "redux-form";
// // import { connect } from "react-redux";
// // import { createStream } from "../../actions";

// // class StreamCreate extends React.Component {
// //   // 1st iteration of doing things
// //   // renderInput(formProps) {
// //   //   return (
// //   //     <input
// //   //       onChange={formProps.input.onChange}
// //   //       value={formProps.input.value}
// //   //     />
// //   //   );
// //   // }

// //   //2nd iteration of doing same things with shortcut
// //   // renderInput(formProps) {
// //   //   return (
// //   //     <input {...formProps.input}
// //   //     />
// //   //   );
// //   // }
// //   renderError({ error, touched }) {
// //     if (error && touched) {
// //       return (
// //         <div className="ui error message">
// //           <div className="header">{error}</div>
// //         </div>
// //       );
// //     }
// //   }
// //   //3rd iteration of doing same things with shortening further code with destructuring
// //   renderInput = ({ input, label, meta }) => {
// //     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
// //     return (
// //       <div className={className}>
// //         <label>{label}</label>
// //         <input {...input} autoComplete="off" />
// //         {this.renderError(meta)}
// //       </div>
// //     );
// //   };
// //   onSubmit = (formValues) => {
// //     this.props.createStream(formValues);
// //   };
// //   render() {
// //     return (
// //       <form
// //         onSubmit={this.props.handleSubmit(this.onSubmit)}
// //         className="ui form error"
// //       >
// //         <Field
// //           name="title"
// //           component={this.renderInput}
// //           label="Enter a Title"
// //         />
// //         <Field
// //           name="description"
// //           component={this.renderInput}
// //           label="Enter a Description"
// //         />
// //         <button className="ui button primary">Submit</button>
// //       </form>
// //     );
// //   }
// // }
// // const validate = (formValues) => {
// //   const errors = {};
// //   if (!formValues.title) {
// //     errors.title = "You must enter a title";
// //   }
// //   if (!formValues.description) {
// //     errors.description = "You must enter a description";
// //   }
// //   return errors;
// // };
// // const formWrapped = reduxForm({
// //   form: "streamCreate",
// //   validate,
// // })(StreamCreate);

// // export default connect(null, { createStream })(formWrapped);
