"use client"
import SelectInfo from "../components/SelectInfo";
import { Button, Card, Form, Segmented, Select } from "antd";
import React, { useState, useTransition } from "react";

const FormItem = Form.Item;

const youPay = [
  {
    value: 'eth',
    label: 'ETH',
    icon: '/icons/eth.svg',
  },
  {
    value: 'usdt-celo',
    label: 'USDT - CELO',
    icon: '/icons/celo.svg',
  },
  {
    value: 'usdt-ton',
    label: 'USDT - TON',
    icon: '/icons/ton.svg',
  },
  {
    value: 'usdt-bnb',
    label: 'USDT - BNB',
    icon: '/icons/bnb.svg',
  },
]

const currency = [
  {
    value: 'ngn',
    label: 'NGN',
    icon: '/icons/ngn.svg',
  }
]

const payFrom = [
  {
    value: 'metamask',
    label: 'Metamask',
    icon: '/icons/metamask.svg',
  },
  {
    value: 'Rainbow',
    label: 'Rainbow',
    icon: '/icons/rainbow.svg',
  },
  {
    value: 'WalletConnect',
    label: 'WalletConnect',
    icon: '/icons/walletconnect.svg',
  },
  {
    value: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)',
    label: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)',
    icon: '/icons/other.svg',
  },
]

const payTo = [
  {
    value: 'uba',
    label: 'UBA',
    icon: '/icons/metamask.svg',
  },
]

interface props {
    handleNext: () => void;
}
const Homepage: React.FC<props> = ({ handleNext }) => {
  const [form] = Form.useForm();
  const [ active, setActive ] = useState("Crypto to cash");
  const [ isPending, startTransition ] = useTransition();

  const [ selectedNetwork, setSelectedNetwork ] = useState({
    value: 'usdt-celo',
    label: 'USDT - CELO',
    icon: '/icons/celo.svg',
  },);
  const [ selectedCurrency, setSelectedCurrency ] = useState({
    value: 'ngn',
    label: 'NGN',
    icon: '/icons/ngn.svg',
  });

  const handleSubmit = () => {
    form.validateFields()
    .then(value => {
      console.log("value", value);
      
    //   startTransition(() => {
    //     router.push("/recipient-details");
    //   })
        if(handleNext) handleNext()
        // else startTransition(() => {
        //     router.push("/recipient-details");
        // })
    })
  }
  return (
    <Card
      classNames={{ body: "crypto-card-body", actions: "crypto-card-actions"}}
    >
      <div 
        style={{ 
          display: "flex",
          alignItems: "center",
          marginBottom: 16,
          justifyContent: "center"
        }}
      >
        <Segmented 
          options={["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"]}
          defaultValue={active}
          onChange={(value) => setActive(value)}
          value={active}
          styles={{ item: { height: 34, borderRadius: 30 }, }}
        />
      </div>

      <div style={{ 
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        gap: 24,
      }} >
        <SelectInfo 
          description="You pay"
          amount={1}
          selectOption={youPay}
          label="Select Crypto"
          value={selectedNetwork}
          setValue={setSelectedNetwork}
        />

        <SelectInfo 
          description="You receive"
          amount={1}
          selectOption={currency}
          label="Select Currency"
          value={selectedCurrency}
          setValue={setSelectedCurrency}
        />
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <FormItem label="Pay from" name="pay_from" rules={[{required: true}]}>
          <Select 
            options={payFrom}
            showSearch
            placeholder="Select an Option"
            optionRender={(option) => (
            <div style={{ 
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingBottom: 8, paddingTop: 8
            }}>
              <img
                src={option.data.icon}
                alt={option.label as string}
                width={24}
                height={24}
              />
              <span className="font-medium">{option.label}</span>
            </div>
            )}
          />
        </FormItem>

        <FormItem label="Pay to" name="pay_to" rules={[{required: true}]}>
          <Select 
            options={payTo}
            showSearch
            placeholder="Select an Option"
            optionRender={(option) => (
            <div style={{ 
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingBottom: 8, paddingTop: 8
            }}>
              <img
                src={option.data.icon}
                alt={option.label as string}
                width={24}
                height={24}
              />
              <span className="font-medium">{option.label}</span>
            </div>
            )}
          />
        </FormItem>

        <FormItem label="" style={{ marginTop: 48 }}>
          <Button htmlType="submit" loading={isPending} type="primary" style={{ width: "100%"}}>Convert Now</Button>
        </FormItem>
      </Form>
    </Card>
  );
}

export default Homepage