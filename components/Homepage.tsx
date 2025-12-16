"use client"
import Container from "@/components/Container";
import SelectInfo from "@/components/SelectInfo";
import { Button, Card, Form, Segmented, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
        else startTransition(() => {
            router.push("/recipient-details");
        })
    })
  }
  return (
    <Container>
      <div className="flex items-center justify-center mb-4!">
        <Segmented 
          options={["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"]}
          defaultValue={active}
          onChange={(value) => setActive(value)}
          value={active}
        />
      </div>

      <div className="flex flex-col gap-6">
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
            <div className="flex items-center gap-3 py-2">
              <Image
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
            <div className="flex items-center gap-3 py-2">
              <Image
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

        <FormItem label="" className="mt-12!">
          <Button htmlType="submit" loading={isPending} type="primary" className="w-full">Convert Now</Button>
        </FormItem>
      </Form>
    </Container>
  );
}

export default Homepage