import React from 'react';
import { Button, Menu } from 'antd';
export const App = () => {

  return (
    <>
      <Menu>
        <Menu.Item key="app">
          Nav one
        </Menu.Item>
      </Menu>
      <Button type="primary">Primary Button</Button>

      <div>Hey</div>
    </>
  );
}

export default App;