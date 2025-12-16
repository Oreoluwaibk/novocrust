import { Dropdown, DropDownProps, Input, Menu, Select, SelectProps } from 'antd'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'

type Option = {
  value: string;
  label: string;
  icon: string;
}

interface InfoProps {
  description: string;
  amount: number;
  selectOption: Option[]
  label: string;
  value: Option;
  setValue: (value: Option) => void;
}
const SelectInfo: React.FC<InfoProps> = ({
    description,
    amount,
    selectOption,
    label,
    value,
    setValue
}) => {
   const [search, setSearch] = useState('');

  const filteredNetworks = useMemo(() => {
    return selectOption.filter((n) =>
      n.label.toLowerCase().includes(search.toLowerCase())
    )
  }, [selectOption, search])
  return (
  <div className='rounded-[30px] border! border-[#E0E0E0]! p-6! flex items-end justify-between h-28'>
    <div className='flex flex-col gap-4'>
      <span className='text-description font-medium text-base'>{description}</span>
      <span className='text-primary text-2xl font-semibold'>{amount.toFixed(2)}</span>
    </div>
      
    <Select
      showSearch={false}
      placeholder={label}
      style={{ width: 150, borderRadius: 30, height: 36 }}
      value={value.value} 
      onChange={(val) => {
        const selected = selectOption.find((o) => o.value === val);
        if (selected) setValue(selected); 
      }}
      optionLabelProp="label"
      options={filteredNetworks.map((option) => ({
        value: option.value,
        label: (
          <div className="flex items-center gap-2">
            <Image src={option.icon} alt={option.label} width={16} height={16} />
            <span>{option.label}</span>
          </div>
        ),
        icon: option.icon,
      }))}
      popupStyle={{ width: 254, padding: "10px" }}
      popupRender={(menu) => (
        <div style={{ width: 244 }} className="flex flex-col justify-center">
          <div className="flex items-center justify-center" style={{ width: 230 }}>
            <Input
              placeholder="Search"
              value={search}
              // prefix={<Sea}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
              style={{ height: 44 }}
              className='py-1!'
            />
          </div>
          {menu}
        </div>
      )}
    />
  </div>
   
  )
}

export default SelectInfo