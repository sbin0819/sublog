import React from 'react';
import { Tabs } from 'antd';
import Login from './login';
import Signup from './signup';
const { TabPane } = Tabs;

const AccountComponent = () => {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='로그인' key='1'>
          <Login />
        </TabPane>
        <TabPane tab='회원가입' key='2'>
          <Signup />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AccountComponent;
