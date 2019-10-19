/*
 * File: index.js
 * Project: template
 * Description:
 * Created By: Tao.Hu 2019-09-10
 * -----
 * Last Modified: 2019-09-10 05:32:39 pm
 * Modified By: Tao.Hu
 * -----
 */
import React from 'react';
import { Table, Divider, Tag, Card } from 'antd';
import AlarmLog from './alarmLog';

const data = [{
  key: 1,
  no: 1,
  name: '测试报警主机',
  ip: '192.168.2.1',
  status: '在线',
  brand: '英安特',
  type: 'Global-NT32',
  address: '深圳市罗湖区支行',
}];

const { Column } = Table;

function Alarm() {
  return (
    <div>
      <Card title="设备信息" bordered={false}>
        <Table dataSource={data}>
          <Column title="No" dataIndex="no" key="no" />
          <Column title="设备名称" dataIndex="name" key="name" />
          <Column title="IP地址" dataIndex="ip" key="ip" />
          <Column title="设备状态" dataIndex="status" key="status" render={(e) => <Tag color={e === '在线' ? '#87d068' : '#f50'}>{e}</Tag>} />
          <Column title="设备品牌" dataIndex="brand" key="brand" render={(e) => <Tag color="cyan">{e}</Tag>} />
          <Column title="设备型号" dataIndex="type" key="type" />
          <Column title="设备地址" dataIndex="address" key="address" />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <a>查看</a>
                <Divider type="vertical" />
                <a>修改</a>
              </span>
            )}
          />
        </Table>
      </Card>
      <AlarmLog />
    </div>
  );
}

export default Alarm;
