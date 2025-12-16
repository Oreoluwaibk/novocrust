import { Button, Card } from 'antd'
import React, { ReactNode } from 'react'

interface props {
  children: ReactNode;
  action?: ReactNode
}
const Container: React.FC<props> = ({ children, action }) => {
  return (
    <Card
      classNames={{ body: "md:px-[100px]! flex flex-col gap-6 min-h-[85vh]", actions: "md:px-[100px]! border-0!"}}
      actions={[
        <div className='w-full'>
          {action}
        </div>
      ]}
    >
      {children}
    </Card>
  )
}

export default Container