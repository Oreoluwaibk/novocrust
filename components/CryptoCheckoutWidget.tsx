// components/CryptoCheckoutWidget.tsx
import React, { useState } from "react";
import HomeStep from "./Homepage";
import RecipientStep from "./DetailPage";
import { App } from "antd";

export default function CryptoCheckoutWidget() {
  const [step, setStep] = useState(1);
  const { modal } = App.useApp()
  const [amount, setAmount] = useState(1000);

  const handleNext = () => {
    setStep(2);
  };

  const handlePay = (recipient: string) => {
    modal.info({
        title: `Paying ${amount} to ${recipient}`
    })
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
      {step === 1 && <HomeStep handleNext={handleNext} />}
      {step === 2 && <RecipientStep handleConfirm={handlePay} handleGoBack={() => setStep(1)}  />}
    </div>
  );
}
