'use client'
import { useRouter } from 'next/navigation';

const GoToButton = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push('/dashboard/workspaces'); 
  };

  return (
    <button onClick={goToPage}>
      Go back to Workspaces
    </button>
  );
};

export default GoToButton;
