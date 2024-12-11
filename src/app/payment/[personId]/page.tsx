'use client';
import PaymentWidget from '@/components/PaymentWidget';
import { useParams } from 'next/navigation';

export default function PaymentPage() {
  const params = useParams();
  const personId = params.personId as string;

  return (
    <div className="payment-page">
      <PaymentWidget personId={personId} />
    </div>
  );
}