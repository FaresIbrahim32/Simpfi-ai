import { useRouter } from 'next/router';

const GoToButton = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push('@src/dashboard/workspaces'); 
  };

  return (
    <button onClick={goToPage}>
      Go back to Workspaces
    </button>
  );
};

export default GoToButton;