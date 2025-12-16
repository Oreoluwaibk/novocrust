import React from "react";
import { createRoot } from "react-dom/client";
import CryptoCheckoutWidget from "../components/CryptoCheckoutWidget";

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
      root.render(<CryptoCheckoutWidget />);
    },
  };
})();
