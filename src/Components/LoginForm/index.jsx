import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { auth } from '../../api';
import { Redirect } from 'react-router-dom';

import './style.scss';

const LoginForm = props => {
  const { getFieldDecorator } = props.form;
  const { login } = auth;
  const [ redirect, setRedirect ] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        /*const data = {
          login: values.login,
          pass: values.pass
        };*/
        const dataTok = btoa(`${values.login}:${values.pass}`);
        login(dataTok);
        setRedirect(true);
      }
    });
  };
  return (
    <div className='form__auth'>
      <Form onSubmit={ handleSubmit } className="login-form">
        <Form.Item><h2>Войдите в систему</h2>
          {redirect ? <Redirect exact to="/" /> : null }
          {getFieldDecorator('login', {
            rules: [{ required: true, message: 'Пожалуйста, введите Ваш Логин!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логин"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('pass', {
            rules: [{ required: true, message: 'Пожалуйста, введите Ваш Пароль!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm
