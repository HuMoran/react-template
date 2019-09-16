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
import React, { useState, useEffect } from 'react';

import {
  Table, Divider, Tag, Card,
} from 'antd';

import IPChan from './ipChan';
import RecordCfg from './recordCfg';

const { Column } = Table;

// const data = [
//   {
//     key: '1',
//     no: 1,
//     name: '测试NVR主机',
//     ip: '192.168.1.10',
//     kind: 'NVR',
//     status: '在线',
//     brand: '海康',
//     type: 'DS-8616N-8E',
//     ipChanNum: 3,
//     diskNum: 1,
//     address: '深圳市罗湖区支行',
//   },
// ];

function getRecordSchedule(timeSchedule) {
  return timeSchedule.reduce((r, e) => {
    const startHour = e.startHour > 9 ? e.startHour : `0${e.startHour}`;
    const startMin = e.startMin > 9 ? e.startMin : `0${e.startMin}`;
    const stopHour = e.stopHour > 9 ? e.stopHour : `0${e.stopHour}`;
    const stopMin = e.stopMin > 9 ? e.stopMin : `0${e.stopMin}`;
    return `${r} ${startHour}:${startMin} - ${stopHour}:${stopMin}`;
  }, '');
}

function Home() {
  const [nvrInfo, setNvrInfo] = useState([]);
  const [chanInfo, setChanInfo] = useState([]);
  const [recordCfgInfo, setRecordCfgInfo] = useState([]);
  useEffect(() => {
    fetch('http://kideasoft.com:3003/nvr')
      .then((res) => res.json())
      .then((data) => {
        setNvrInfo([{
          key: '1',
          no: 1,
          name: '测试NVR主机',
          ip: data.basic.ip,
          status: '在线',
          brand: '海康',
          type: 'DS-8616N-8E',
          ipChanNum: data.IPChanNum,
          diskNum: data.diskNum,
          address: '深圳市罗湖区支行',
        }]);
        setChanInfo(data.IPChans.map((e) => ({ key: e.no, ...e })));
        const { recordCfg } = data;
        setRecordCfgInfo(data.IPChans.map((e, i) => ({
          key: recordCfg[i].chanNo,
          no: recordCfg[i].chanNo,
          isRecord: recordCfg[i].isRecord,
          day1: recordCfg[i].details[0].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[0].recordSchedule),
          day2: recordCfg[i].details[1].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[1].recordSchedule),
          day3: recordCfg[i].details[2].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[2].recordSchedule),
          day4: recordCfg[i].details[3].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[3].recordSchedule),
          day5: recordCfg[i].details[4].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[4].recordSchedule),
          day6: recordCfg[i].details[5].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[5].recordSchedule),
          day7: recordCfg[i].details[6].isAllDayRecord ? '全天录像' : getRecordSchedule(recordCfg[i].details[6].recordSchedule),
        })));
      });
  }, []);
  return (
    <div>
      <Card title="设备信息" bordered={false}>
        <Table dataSource={nvrInfo}>
          <Column title="No" dataIndex="no" key="no" />
          <Column title="设备名称" dataIndex="name" key="name" />
          <Column title="IP地址" dataIndex="ip" key="ip" />
          <Column title="设备状态" dataIndex="status" key="status" render={(e) => <Tag color={e === '在线' ? '#87d068' : '#f50'}>{e}</Tag>} />
          <Column title="设备品牌" dataIndex="brand" key="brand" render={(e) => <Tag color="cyan">{e}</Tag>} />
          <Column title="设备型号" dataIndex="type" key="type" />
          <Column title="通道数量" dataIndex="ipChanNum" key="ipChanNum" />
          <Column title="硬盘数量" dataIndex="diskNum" key="diskNum" />
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
      <Card title="通道信息" bordered={false}>
        <IPChan data={chanInfo} />
      </Card>
      <Card title="录像计划" bordered={false}>
        <RecordCfg data={recordCfgInfo} />
      </Card>
    </div>
  );
}

export default Home;
