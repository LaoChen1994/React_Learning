import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'zent'

interface IDataListProps {}

interface IComment {
  body: string;
  email: string;
  id: number;
  postId: number;
  name: string;
}

export function DataList(props: IDataListProps) {
  const [commentList, setCommentList] = useState([] as IComment[])

  useEffect(() => {
    const fetchData = async () => {
      console.log('初始化组件采用我')
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      )
      setCommentList(data.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Reset的时只会调用我')
  })

  const commentReset = () => {
    setCommentList([])
  }

  const deleteData = (data: IComment) => () => {
    const index = commentList.findIndex(elem => elem.id === data.id);
    let newData = [...commentList];
    newData.splice(index, 1);
    console.log(commentList.length);
    setCommentList(newData);
  } 

  const columns = [
    {
      title: '编号',
      name: 'postId'
    },
    {
      title: '名称',
      name: 'name'
    },
    {
      title: '邮箱地址',
      name: 'email'
    },
    {
      title: '内容',
      name: 'content'
    },
    {
      title: '操作',
      name: '',
      bodyRender: (data) => {
        return <Button onClick={deleteData(data)}>删除</Button>
      }
    }
  ]

  return (
    <div>
      <Button onClick={commentReset} type="primary">
        清空
      </Button>
      <Table columns={columns} datasets={commentList} />
    </div>
  )
}
