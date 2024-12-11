'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateOptIn } from '@/data/people';

export default function PaymentCompletePage({ params }: { params: { personId: string } }) {
  const router = useRouter();

  useEffect(() => {
    async function handleCompletion() {
      try {
        await updateOptIn(params.personId, true);
        router.push('/');
      } catch (error) {
        console.error('Payment completion error:', error);
        router.push('/');
      }
    }
    handleCompletion();
  }, [params.personId, router]);

  return <div>Processing payment completion...</div>;
}