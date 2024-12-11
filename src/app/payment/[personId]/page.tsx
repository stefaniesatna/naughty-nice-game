'use client';
import PaymentWidget from '@/components/PaymentWidget';

export default function PaymentPage({ params }: { params: { personId: string } }) {
  return (
    <div className="payment-page">
      <PaymentWidget personId={params.personId} />
    </div>
  );
}