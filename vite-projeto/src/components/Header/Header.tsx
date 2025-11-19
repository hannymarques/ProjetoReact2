import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

//Eu (Hanielly) ou Eduardo precisa lembrar de importar o ant design

const items: MenuProps['items'] = [
  {
    label: <a href="/home">Home</a>,
    key: 'home',
  },
  {
    label: <a href="/sobre">Sobre</a>,
    key: 'sobre',
  },
  {
    label: <a href="/contato">Contato</a>,
    key: 'contato',
  },
];

const Header: React.FC = () => (
  <div style={{ padding: "16px", background: "#f0f0f0" }}>
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Menu
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </div>
);

export default Header;
