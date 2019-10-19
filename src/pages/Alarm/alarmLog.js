/*
 * File: /src/pages/Alarm/alarmLog.js
 * Project: template
 * Description:
 * Created By: Tao.Hu 2019-09-21
 * -----
 * Last Modified: 2019-09-21 04:26:59 pm
 * Modified By: Tao.Hu
 * -----
 * Copyright (c) 2019 KiwiSec Tech Co.,Ltd
 */

import React from 'react';
import { Table, Tag, Card } from 'antd';

const data = [{
  key: 1,
  eventtime: new Date().toLocaleString(),
  comefrom: '192.168.2.108',
  status: '布放',
}];

const { Column } = Table;

function AlarmLog() {
  return (
    <div>
      <Card title="撤布防记录" bordered={false}>
        <Table dataSource={data}>
          <Column title="发生时间" dataIndex="eventtime" key="eventtime" />
          <Column title="设备IP" dataIndex="comefrom" key="comefrom" />
          <Column title="设备状态" dataIndex="status" key="status" render={(e) => <Tag color={e === '在线' ? '#87d068' : '#f50'}>{e}</Tag>} />
        </Table>
      </Card>
    </div>
  );
}

export default AlarmLog;
