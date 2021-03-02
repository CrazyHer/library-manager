import {
  Alert,
  Button,
  Descriptions,
  Form,
  Input,
  List,
  message,
  Modal,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { fetch, Models } from '../../rapper';
import { RootState } from '../../reducers/types';
import styles from './Return.css';

const Return = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const [data, setData] = useState<Models['GET/lib/search']['Res']['data']>();
  const [modalVisible, showModal] = useState<boolean>(false);
  const [form] = useForm();
  const onSearch = async (e: string) => {
    if (e.trim())
      await fetch['GET/lib/search']({ bookId: Number(e), token }).then((res) =>
        setData(res.data)
      );
  };

  const onCancle = () => {
    showModal(false);
  };
  const onSubmit = async () => {
    await fetch['GET/lib/return']({
      token,
      bookId: data?.bookId as number,
      userId: form.getFieldValue('userId'),
    });
    message.success('归还成功');
    showModal(false);
    fetch['GET/lib/search']({ bookId: data?.bookId as number, token })
      .then((res) => setData(res.data))
      .catch((err) => {
        throw new Error(err);
      });
    form.resetFields();
  };
  return (
    <div>
      <Alert message="请输入要归还的图书书号" type="info" showIcon closable />
      <div className={styles.searchBar}>
        <Input.Search
          onSearch={onSearch}
          placeholder="请输入书号搜索"
          style={{ width: '200px' }}
          type="number"
          min={0}
        />
        {data?.author && (
          <Button type="primary" onClick={() => showModal(true)}>
            归还
          </Button>
        )}
      </div>
      {data?.bookId && (
        <div>
          <Descriptions column={3}>
            <Descriptions.Item label="书名">{data.title}</Descriptions.Item>
            <Descriptions.Item label="作者">{data.author}</Descriptions.Item>
            <Descriptions.Item label="馆内现存">
              {data.remains}
            </Descriptions.Item>
            <Descriptions.Item label="在借记录">
              <List>
                {data.record?.map((v, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <List.Item key={i}>
                    <div style={{ margin: 0 }}>
                      <p style={{ margin: 0 }}>借阅证号:{v.userId}</p>
                      <p style={{ margin: 0 }}>
                        归还日期:
                        {v.returnDate}
                      </p>
                    </div>
                  </List.Item>
                ))}
              </List>
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}

      <Modal
        title={`归还${data?.title}`}
        visible={modalVisible}
        footer={null}
        onCancel={onCancle}
        bodyStyle={{ height: '130px' }}
      >
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            name="userId"
            label="借阅证号"
            rules={[
              { required: true, message: '请输入借阅证号' },
              {
                type: 'integer',
                transform: (v) => Number(v),
                message: '借阅证号无效！',
              },
            ]}
            validateFirst
          >
            <Input />
          </Form.Item>
          <Form.Item className={styles.footer}>
            <div>
              <Button className={styles.btn} type="primary" htmlType="submit">
                确认归还
              </Button>
              <Button className={styles.btn} type="default" onClick={onCancle}>
                取消
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Return;
