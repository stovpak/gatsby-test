/* eslint-disable no-return-await */
/* eslint-disable no-shadow */
import React, { useRef, useState, useEffect } from 'react';
import {
  shape, func, bool, number, oneOfType,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  Form, Input, Button, Upload,
} from 'antd';
import { sendMessage } from '../../../actions/contact';
import ContactUsFeedbackModal from './modal';
import Icon from '../../elements/Icon';
import { useFormMessagesQuery } from './query';

const { TextArea } = Input;

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const actionCreators = {
  sendMessage,
};

const ContactUsForm = ({
  data, sendMessage, contact,
}) => {
  const formMessagesData = useFormMessagesQuery();
  const { formMessages } = formMessagesData.strapi;
  const modalMessages = formMessages.find((message) => message.type === data.type);
  const errorMessages = formMessages.find((message) => message.type === 'error');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalError, setModalError] = useState(false);
  const [userName, setUserName] = useState('');
  const [modalText, setModalText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const handleNewMessageSubmit = (bodyData) => sendMessage(bodyData);

  const handleResetForm = () => {
    formRef.current.resetFields();
  };

  useEffect(() => {
    if (contact.sent && !contact.sending) {
      if (contact.item === 200) {
        setUserName(firstName);
        setFileList([]);
        handleResetForm();
      } else {
        setModalText(errorMessages.message);
        setModalError(true);
      }

      setIsModalVisible(true);
    }
  }, [contact.sent]);

  const getFieldLabel = (type) => {
    switch (type) {
      case 'sales':
        return 'Brief intro to your project';
      case 'recruiter':
        return 'Linkedn profile';
      default:
        return null;
    }
  };

  const htmlMessage = (message, firstName, secondName, clientEmail) => (`
    <h1>
      Hello, i am ${firstName} ${secondName}
    </h1>
    <h2>
      My Email for reply is ${clientEmail}
    </h2>
    <p>
      ${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}
    </p>`
  );

  const fileListToBase64 = async (files) => {
    const getBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    const promises = [];
    Object.keys(files).every((file) => promises.push(getBase64(files[file])));
    return await Promise.all(promises);
  };

  const onFinish = (values) => {
    setFirstName(values.firstName);
    fileListToBase64(fileList).then((result) => {
      const requestData = {
        message: htmlMessage(values.message,
          values.firstName, values.secondName,
          values.clientEmail),
        type: data.type,
        clientEmail: values.clientEmail,
        files: result,
      };

      handleNewMessageSubmit(requestData);
    });
  };

  const onChange = (info) => {
    if (info.file.status === 'done') {
      setFileList(info.fileList);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setModalText(modalMessages.message);
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <Form
        className="ds-form"
        ref={formRef}
        form={form}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="First name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input className="ds-input ds-input-border-bottom-only" />
        </Form.Item>
        <Form.Item
          label="Second name"
          name="secondName"
          rules={[
            {
              required: true,
              message: 'Please input your second name!',
            },
          ]}
        >
          <Input className="ds-input ds-input-border-bottom-only" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="clientEmail"
          rules={[
            {
              type: 'email',
              message: 'Please enter correct email address',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input className="ds-input ds-input-border-bottom-only" />
        </Form.Item>

        <Form.Item
          label={getFieldLabel(data.type)}
          name="message"
          rules={[
            {
              required: true,
              message: 'Please input your message!',
            },
          ]}
        >
          <TextArea
            className="no-resize"
            rows={5}
          />
        </Form.Item>

        <Upload
          className="ds-upload"
          name="files"
          accept="application/pdf"
          onChange={onChange}
          fileList={fileList}
        >
          <Button
            className="inline-flex flex-center text-regular"
            block
            type="link"
            shape="circle"
            icon={<Icon name="clip" />}
          >
            <span className="ds-upload-label text-regular">Attach the file</span>
          </Button>
        </Upload>

        <Form.Item
          className="text-right"
        >
          <Button
            className="ds-button"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <ContactUsFeedbackModal
        text={modalText}
        isError={isModalError}
        visible={isModalVisible}
        handleCancel={handleCancel}
        userName={userName}
      />
    </>
  );
};

ContactUsForm.propTypes = {
  data: shape(),
  sendMessage: func,
  contact: shape({
    item: oneOfType([number, shape()]),
    sending: bool,
    sent: bool,
  }),
};

ContactUsForm.defaultProps = {
  data: {},
  sendMessage: null,
  contact: {
    item: null,
    sending: false,
    sent: false,
  },
};

export default connect(mapStateToProps, actionCreators)(ContactUsForm);
