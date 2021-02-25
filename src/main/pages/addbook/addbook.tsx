import { Button, Form, Input } from 'antd';
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

  const onSubmit = async (e: any) => {
    const bookId = data?.bookId as number;
    if (type === 'add') {
      await fetch['POST/lib/addBook']({
        bookId,
        token,
        amount: e.amount,
      });
    } else if (type === 'new') {
      await fetch['POST/lib/newbook']({
        bookId,
        token,
        title: e.title,
        author: e.author,
        amount: e.amount,
      });
    }
  };

  return (
    <div>
      <Form form={form} onFinish={onSubmit}>
        <Input.Search
          onSearch={onSearch}
          placeholder="输入书号"
          style={{ width: '200px' }}
          type="number"
          min={0}
        />
        <Form.Item label="书名" name="title">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="作者" name="author">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="库存量" name="remains">
          <Input disabled={disabled} />
        </Form.Item>
        {type === 'add' && (
          <>
            <Form.Item label="采购量" name="amount">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              新增库存
            </Button>
          </>
        )}
        {type === 'new' && (
          <Button type="primary" htmlType="submit">
            采编入库
          </Button>
        )}
      </Form>
    </div>
  );
};
export default AddBook;
