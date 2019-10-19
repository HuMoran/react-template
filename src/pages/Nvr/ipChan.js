/*
 * File: ipChan.js
 * Project: template
 * Description:
 * Created By: Tao.Hu 2019-09-10
 * -----
 * Last Modified: 2019-09-10 05:32:39 pm
 * Modified By: Tao.Hu
 * -----
 */
import React from 'react';

import { Table, Tag } from 'antd';

const { Column } = Table;

function IPChan(props) {
  const { data } = props;
  return (
    <Table dataSource={data}>
      <Column title="通道编号" dataIndex="no" key="no" />
      <Column title="IP地址" dataIndex="ip" key="ip" />
      <Column title="通道状态" dataIndex="isOnline" key="isOnline" render={(e) => <Tag color={e ? '#87d068' : '#f50'}>{e ? '在线' : '离线'}</Tag>} />
      <Column
        title="操作"
        key="action"
        render={(text, record) => (
          <span>
            <a>查看录像</a>
          </span>
        )}
      />
    </Table>
  );
}

export default IPChan;
