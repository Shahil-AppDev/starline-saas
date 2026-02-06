'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TrainingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/tools');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea5e9] mb-4"></div>
        <p className="text-[#94a3b8]">Redirection vers les formations...</p>
      </div>
    </div>
  );
}
