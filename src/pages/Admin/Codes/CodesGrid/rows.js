import { useUsers } from '../../../../redux/selectors';

const useRows = () => {
  const { status, totalCount, users } = useUsers();

  return { status, totalCount, users };
};

export default useRows;
