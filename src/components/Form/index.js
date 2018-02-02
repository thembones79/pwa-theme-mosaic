import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.css';

let CommentForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" placeholder={props.texts.FORMS && props.texts.FORMS.YOUR_NAME} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" placeholder={props.texts.FORMS && props.texts.FORMS.YOUR_EMAIL} required />
      </div>
      <div>
        <label htmlFor="content">{props.texts.TEXTS && props.texts.TEXTS.LEAVE_COMMENTS}</label>
        <Field name="content" component="textarea" type="text" placeholder={props.texts.FORMS && props.texts.FORMS.YOUR_COMMENT} required />
      </div>
      <Button id="submit" type="submit" color="teal" compact>
        {props.texts.FORMS && props.texts.FORMS.SEND}
      </Button>
    </Form>
  );
};

CommentForm.defaultProps = {
  texts: {
    TEXTS: {
      LEAVE_COMMENTS: 'Leave comment',
    },
    FORMS: {
      YOUR_NAME: 'Your name',
      YOUR_EMAIL: 'Your e-mail address',
      YOUR_COMMENT: 'Your comment',
      SEND: 'Send',
    },
  },
};
CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  texts: PropTypes.shape({
    TEXTS: PropTypes.shape({
      LEAVE_COMMENTS: PropTypes.string,
    }),
    FORMS: PropTypes.shape({
      YOUR_NAME: PropTypes.string,
      YOUR_EMAIL: PropTypes.string,
      YOUR_COMMENT: PropTypes.string,
      SEND: PropTypes.string,
    }),
  }),
};

CommentForm = reduxForm({
  form: 'comment',
})(CommentForm);

export default CommentForm;
