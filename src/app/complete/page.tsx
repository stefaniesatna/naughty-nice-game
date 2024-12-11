'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { updateOptIn } from '@/data/people';

export default function PaymentCompletePage() {
  const router = useRouter();
  const params = useParams();
  const personId = params.endToEndId as string;

  useEffect(() => {
    async function handleCompletion() {
      try {
        await updateOptIn(personId, true);
        router.push('/');
      } catch (error) {
        console.error('Payment completion error:', error);
        router.push('/');
      }
    }
    handleCompletion();
  }, [personId, router]);

  return <div>Processing payment completion...</div>;
}