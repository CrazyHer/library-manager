/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
// 由于该页面逻辑较复杂，暂时不启用type检查，待以后完善
import {
  Button,
  List,
  Modal,
  Table,
  Form,
  DatePicker,
  Input,
  message,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { ExpandableConfig } from 'antd/lib/table/interface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetch, Models } from '../../rapper';
import { RootState } from '../../reducers/types';

const Search = () => {
  const [data, setData] = useState<Models['GET/lib']['Res']['data']>();
  const { token } = useSelector((state: RootState) => state.user);
  const [reFetch, setReFetch] = useState<boolean>(false);
  const [modalVisible, showModal] = useState<boolean>(false);
  const [modalContext, setModalContext] = useState<{
    bookId: number;
    title: string;
  }>();
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  useEffect(() => {
    if (token) {
      fetch['GET/lib']({ token })
        .then((res) => setData(res.data))
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [reFetch]);

  const onSearch = async (e: any) => {
    if ((e as string).trim()) {
      const res = await fetch['GET/lib/search']({
        bookId: Number(e),
        token,
      });
      if (res.data.bookId) setData([res.data]);
      else setData([]);
    } else setReFetch(!reFetch);
  };

  const [form] = useForm();

  const tableColums: ColumnsType<Record<string, unknown>> = [
    { title: '书号', dataIndex: 'bookId', key: 'bookId' },
    { title: '书名', dataIndex: 'title', key: 'title' },
    { title: '作者', dataIndex: 'author', key: 'author' },
    { title: '馆内现存', dataIndex: 'remains', key: 'remains' },
    { title: '图书总量', dataIndex: 'total', key: 'total' },
    {
      title: '',
      key: 'action',
      render: (e) => (
        <Button
          type="link"
          onClick={() => {
            setModalContext({ bookId: e.bookId, title: e.title });
            showModal(true);
          }}
        >
          借阅
        </Button>
      ),
    },
  ];

  const paginationConfig: TablePaginationConfig = {
    hideOnSinglePage: true,
    pageSize: 9,
  };

  const expandedConfig: ExpandableConfig<Record<string, unknown>> = {
    expandedRowRender: (record: any) => (
      <List>
        {record?.record?.map((v: any, i: number) => (
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
    ),
    rowExpandable: (record) => record.remains !== record.total,
    expandIconColumnIndex: 5,
    expandIcon: ({ expanded, onExpand, record }) =>
      expanded ? (
        <Button type="link" onClick={(e) => onExpand(record, e)}>
          折叠在借记录
        </Button>
      ) : (
        <Button type="link" onClick={(e) => onExpand(record, e)}>
          查看在借记录
        </Button>
      ),
  };

  const onCancle = () => {
    showModal(false);
    form.resetFields();
  };

  const onSubmit = async (e: any) => {
    setSubmitLoading(true);
    await fetch['POST/lib/borrow']({
      token,
      bookId: e.bookId,
      userID: Number(e.userID),
      returnDate: form.getFieldValue('returnDate'),
    }).catch((err) => {
      if (err) message.error('借阅失败!');
    });
    setReFetch(!reFetch);
    setSubmitLoading(false);
    showModal(false);
    form.resetFields();
  };
  return (
    <div>
      <Input.Search
        onSearch={onSearch}
        placeholder="搜索书号"
        style={{ width: '200px' }}
        min={0}
        type="number"
      />
      <Table
        columns={tableColums}
        dataSource={data?.map((v) => ({ ...v, key: v.bookId }))}
        pagination={paginationConfig}
        expandable={expandedConfig}
      />

      <Modal
        title={`借阅${modalContext?.title}`}
        visible={modalVisible}
        footer={null}
        onCancel={onCancle}
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
          <Form.Item
            name="returnDate"
            label="还书日期"
            rules={[{ required: true, message: '请选择还书日期' }]}
          >
            <DatePicker
              inputReadOnly
              picker="date"
              allowClear={false}
              placeholder="选择还书日期"
              onChange={(value) => {
                form.setFieldsValue({ date: value });
              }}
            />
          </Form.Item>

          <Form.Item>
            <div>
              <Button loading={submitLoading} type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="default" onClick={onCancle}>
                取消
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Search;
