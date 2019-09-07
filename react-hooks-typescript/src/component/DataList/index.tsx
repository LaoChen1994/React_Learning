import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'zent'

interface IDataListProps {}

export function DataList(props: IDataListProps) {
  const [commentList, setCommentList] = useState([])

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
    console.log('没事情就调用我')
  })

  const commentReset = () => {
    setCommentList([])
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
    }
  ]

  return (
    <div>
      <Button onClick={commentReset} type="primary">
        Reset
      </Button>
      <Table columns={columns} datasets={commentList} />
    </div>
  )
}
