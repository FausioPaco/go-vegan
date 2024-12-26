import { Icon } from '@/components/ui/icon';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const UserAuth = () => {
  const userInfo = useSelector((state: RootState) => state.user);

  return (
    <div className="mx-2 flex cursor-pointer items-center gap-x-2">
      <Icon name="user" className="text-white" />
      {userInfo.isAuthenticated && (
        <>
          <p className="mb-0 text-white">{userInfo.user?.name}</p>
        </>
      )}
    </div>
  );
};

export default UserAuth;
