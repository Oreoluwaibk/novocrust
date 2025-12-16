"use client"
import Container from '@/components/Container'
import { bank } from '@/utils/data';
import { ArrowLeftOutlined } from "@ant-design/icons"
import { Button, Form, Image, Input, InputNumber, Select } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'

interface props {
    handleConfirm?: (value: string) => void;
    handleGoBack?: () => void;
}
const FormItem = Form.Item;
const DetailPage: React.FC<props> = ({ handleConfirm, handleGoBack }) => {
 const router = useRouter();
    const [form] = Form.useForm();
    const [ steps, setSteps ] = useState(1);
    const [ accountName, setAccountName ] = useState("")
    const handleBack = () => {
        if(steps === 2) return setSteps(1);
        // router.back();
        if(handleGoBack) handleGoBack();
        else router.back();
    }

    const handleNext = () => {
        form.validateFields()
        .then(value => {
            console.log("value", value);
            if(steps === 1) return setSteps(2);
            if(handleConfirm) handleConfirm(accountName);
            
        })
    }
  return (
    <Container
        action={<FormItem >
            <Button htmlType="submit" className='w-full' onClick={handleNext} type='primary'>Next</Button>
        </FormItem>}
    >
        <div className='flex items-center w-full md:gap-[45%] gap-[25%]'>
            <ArrowLeftOutlined className="cursor-pointer" onClick={handleBack} />

            <p className='text-bg text-xl font-medium'>Recipient details</p>
        </div>

        <Form form={form} layout="vertical" onFinish={handleNext}>
            {steps === 1 && <>
                <FormItem label="Bank" name="bank" rules={[{required: true}]}>
                    <Select 
                        options={bank}
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

                <FormItem label="Account Number" name="account_number" rules={[{required: true}]}>
                    <InputNumber style={{ width: "100%" }} placeholder='Enter your account number' />
                </FormItem>

                <FormItem  label="Account Name" name="account_name" rules={[{required: true}]}>
                    <Input onChange={(e) => setAccountName(e.target.value)} value={accountName} placeholder='Enter your account name' />
                </FormItem>
            </>}

            {steps === 2 && <>
                <FormItem label="Email" name="email" rules={[{required: true}]}>
                    <Input placeholder='Enter recipient email' />
                </FormItem>

                <FormItem label="Recipient phone number" name="phone" rules={[{required: true}]}>
                    <PhoneInput 
                        placeholder='Enter your phone number'
                        country="ng"
                        inputClass='md:pl-[146px]!'
                        buttonClass='md:w-[136px]! flex justify-center'
                        inputStyle={{width: "100%", height:60, borderRadius: 30, backgroundColor: "transparent"}}
                        buttonStyle={{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
                        containerStyle={{ borderRadius: 30 }}
                        
                   
                    />
                </FormItem>
            </>}
        </Form>
    </Container>
  )
}

export default DetailPage