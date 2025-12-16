import React from "react";
import { createRoot } from "react-dom/client";
import CryptoCheckoutWidget from "../components/CryptoCheckoutWidget";
import { ConfigProvider } from "antd";
// import "antd/dist/reset.css";

// Extend window object
declare global {
  interface Window {
    CryptoCheckout?: {
      init: (options: { containerId: string }) => void;
    };
  }
}

(function () {
  window.CryptoCheckout = {
    init: ({ containerId }: { containerId: string }) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      // Use React 18 Root API
      const root = createRoot(container);
      root.render(
       <ConfigProvider
          theme={{
            token: {
                colorPrimary: '#013941',
                colorPrimaryBg: "#fff",
                // fontFamily: outfit.style.fontFamily,
              },
              components: {
                Input: {
                  borderRadius: 30,
                  controlHeight: 60,
                   padding: 20,
                  controlPaddingHorizontal: 20,
                },
                Segmented: {
                  itemSelectedBg: "#013941",
                  itemSelectedColor: "#fff",
                  borderRadius: 30,
                  fontSize: 14
                },
                InputNumber: {
                  borderRadius: 30,
                  controlHeight: 60,
                },
                Select: {
                  borderRadius: 30,
                  controlHeight: 60,
                  colorTextPlaceholder: "#013941",
                  fontSize: 16,
                  padding: 20,
                  controlPaddingHorizontal: 20,
                },
                Form: {
                  labelColor: "#013941",
                  labelFontSize: 16,
                  colorTextLabel: "#013941"
                },
                Button: {
                  borderRadius: 30,
                  controlHeight: 60,
                  defaultHoverBorderColor: "#013941",
                  padding: 10,
                  colorBorder:"#013941",
                }
              }
          }}
        >
      <CryptoCheckoutWidget />
      </ConfigProvider>);
    },
  };
})();
