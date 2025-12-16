import { outfit } from '@/app/layout';
import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#013941',
    colorPrimaryBg: "#fff",
    fontFamily: outfit.style.fontFamily,
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
};
