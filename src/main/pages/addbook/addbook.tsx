import { Alert, Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetch, Models } from '../../rapper';
import { RootState } from '../../reducers/types';

const AddBook = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const [disabled, setDisabled] = useState<boolean>(true);
  // 根据搜索结果判断是增加库存还是新书入库
  const [type, setType] = useState<'add' | 'new'>();
  const [data, setData] = useState<Models['GET/lib/search']['Res']['data']>();
  const [form] = useForm();
  const onSearch = async (e: string) => {
    // 搜索框输入书号有效
    if (e.trim()) {
      const res = await fetch['GET/lib/search']({
        bookId: Number(e),
        token,
      });
      // 若该书存在，则为增加库存
      if (res.data.bookId) {
        setData(res.data);
        setDisabled(true);
        form.setFields([
          { name: 'title', value: res.data?.title },
          { name: 'author', value: res.data?.author },
          { name: 'remains', value: res.data?.remains },
        ]);
        setType('add');
        // 否则为新书入库
      } else {
        setData({
          bookId: Number(e),
          title: '',
          author: '',
          remains: 0,
          total: 0,
          record: [],
        });
        setDisabled(false);
        setType('new');
      }
      // 搜索框清零时，回到初始状态
    } else {
      form.resetFields();
      setData(undefined);
      setType(undefined);
      setDisabled(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const bookId = data?.bookId as number;
    if (type === 'add') {
      await fetch['POST/lib/addBook']({
        bookId,
        token,
        amount: Number(e.amount),
      });
    } else if (type === 'new') {
      await fetch['POST/lib/newbook']({
        bookId,
        token,
        title: e.title,
        author: e.author,
        amount: Number(e.remains),
      });
    }
    message.success('提交成功');
    form.resetFields(['title', 'author', 'remains', 'amount']);
    setData(undefined);
    setType(undefined);
    setDisabled(true);
  };

  return (
    <div>
      <Input.Search
        onSearch={onSearch}
        placeholder="输入书号"
        style={{ width: '200px', marginBottom: '10px' }}
        type="number"
        min={0}
      />
      <Alert
        message="请先输入书号进行搜索，若该书存在，则输入新采购量；否则填写新书的相关信息提交入库"
        type="info"
        closable
        showIcon
        style={{ marginBottom: '10px' }}
      />
      <Form
        form={form}
        onFinish={onSubmit}
        labelCol={{ xs: { span: 24 }, sm: { span: 2 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
      >
        <Form.Item
          label="书名"
          name="title"
          rules={[{ required: true, message: '请填写书名' }]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: '请填写作者' }]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          label="库存量"
          name="remains"
          rules={[{ required: true, message: '请填写库存量' }]}
        >
          <Input type="number" disabled={disabled} />
        </Form.Item>
        {type === 'add' && (
          <>
            <Form.Item
              label="采购量"
              name="amount"
              rules={[{ required: true, message: '请填写采购量' }]}
            >
              <Input type="number" min={0} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                sm: {
                  span: 16,
                  offset: 2,
                },
              }}
            >
              <Button type="primary" htmlType="submit">
                新增库存
              </Button>
            </Form.Item>
          </>
        )}
        {type === 'new' && (
          <Form.Item
            wrapperCol={{
              sm: {
                span: 16,
                offset: 2,
              },
            }}
          >
            <Button type="primary" htmlType="submit">
              采编入库
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};
export default AddBook;
