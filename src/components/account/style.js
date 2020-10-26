import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
const Container = styled(Form)`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .login-form {
    width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;
