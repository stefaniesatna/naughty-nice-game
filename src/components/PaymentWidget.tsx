/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

declare global {
  interface Window {
    moneyhub: any;
  }
}


import { useEffect } from 'react';

export default function PaymentWidget({ personId }: { personId: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.eu-west-1.amazonaws.com/widgets.moneyhub.co.uk/widgets.bundle.js";
    script.async = true;
    script.onload = () => {
      window.moneyhub.init({
        elementId: "root",
        type: "payment-single",
        widgetId: "d32d18db-43ff-462a-be47-240be50b7ac7",
        params: {
          payeeId: "2c566e60-b6e2-4cfb-9e74-bb0c9a0085cd",
          amount: 0.50,
          reference: "Donation",
          endToEndId: `payment-${Date.now()}`,
          state: `session-${Date.now()}`,
          redirectUri: `${window.location.origin}/payment/${personId}/complete`
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [personId]);

  return <div id="root"></div>;
} 