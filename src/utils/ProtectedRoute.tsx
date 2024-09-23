import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { AiOutlineClose } from 'react-icons/ai';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setOpen(true);
    }
  }, [isLoggedIn]);

  const handleLoginRedirect = () => {
    setOpen(false);
    navigate('/register'); 
  };

  if (!isLoggedIn) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='bg-gray-100 rounded-lg shadow-lg p-20 lg:p-28 text-center z-[9999]'>
          <p className='text-lg text-gray-800 mb-4'>You need to be logged in to access this page.</p>
          <button className='absolute top-4 right-4' onClick={() => {
            setOpen(false);
            navigate('/');
          }}>
            <AiOutlineClose />
          </button>
          <button 
            className='bg-men-blue text-white rounded-md px-4 py-2 text-base transition duration-300 ease-in-out hover:bg-red-600'
            onClick={handleLoginRedirect}
          >
            Login / Register
          </button>
        </DialogContent>
      </Dialog>
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
