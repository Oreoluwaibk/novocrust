import { Input, Select } from 'antd'
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
  <div style={{
    borderRadius: 30,
    borderWidth:1,
    borderColor: "#E0E0E0",
    borderStyle: "solid",
    padding: 24,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 112
  }} >
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }} >
      <span style={{ fontWeight: "500", fontSize: 16, color: "#828282"}} >{description}</span>
      <span style={{ fontWeight: "600", fontSize: 24, color: "#000E10" }} >{amount.toFixed(2)}</span>
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
            <img src={option.icon} alt={option.label} width={16} height={16} />
            <span>{option.label}</span>
          </div>
        ),
        icon: option.icon,
      }))}
      popupStyle={{ width: 254, padding: "10px" }}
      popupRender={(menu) => (
        <div style={{ width: 244, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div  style={{ width: 230, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Input
              placeholder="Search"
              value={search}
              // prefix={<Sea}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
              style={{ height: 44, paddingTop: 4, paddingBottom: 4 }}
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