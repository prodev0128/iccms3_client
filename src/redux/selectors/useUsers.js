import { useSelector } from 'react-redux';

const useUsers = () => useSelector((state) => state.users);

export default useUsers;
