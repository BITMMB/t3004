import React from 'react'
import { Alert, Space } from 'antd'

const Error = () => {
  return (
    <Space>
      <Alert message="Error" description="NetworkError" type="error" showIcon />
    </Space>
  )
}
export default Error
