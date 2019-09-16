/*
 * File: recordCfg.js
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

function RecordCfg(props) {
  const { data } = props;
  return (
    <Table dataSource={data}>
      <Column title="通道编号" dataIndex="no" key="no" />
      <Column title="录像计划" dataIndex="isRecord" key="isRecord" render={(e) => <Tag color={e ? '#87d068' : '#f50'}>{e ? '启动' : '停用'}</Tag>} />
      <Column title="星期一" dataIndex="day1" key="day1" />
      <Column title="星期二" dataIndex="day2" key="day2" />
      <Column title="星期三" dataIndex="day3" key="day3" />
      <Column title="星期四" dataIndex="day4" key="day4" />
      <Column title="星期五" dataIndex="day5" key="day5" />
      <Column title="星期六" dataIndex="day6" key="day6" />
      <Column title="星期日" dataIndex="day7" key="day7" />
      <Column
        title="操作"
        key="action"
        render={(text, record) => (
          <span>
            <a>录像质量</a>
          </span>
        )}
      />
    </Table>
  );
}

export default RecordCfg;
