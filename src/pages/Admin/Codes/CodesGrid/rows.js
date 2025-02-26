import { useCodes } from '../../../../redux/selectors';

const useRows = () => {
  const { codes, status, totalCount } = useCodes();

  return { status, totalCount, codes };
};

export default useRows;
