import { Button, Popconfirm, Table } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, fetchUsers } from "../usersSlice"

export default function UsersPage(){
  const dispatch = useDispatch()
  const { list, status } = useSelector(s => s.users)

  useEffect(() => { dispatch(fetchUsers()) }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  const columns = [
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
          <Button danger size="small">Delete</Button>
        </Popconfirm>
      )
    }
  ]

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <Table dataSource={list} columns={columns} rowKey="id" />
    </div>
  )
}