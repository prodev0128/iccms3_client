import { useCodeOptions } from '../../../../redux/selectors';

const useRows = () => {
  const { codeOptions, status, totalCount } = useCodeOptions();

  return { status, totalCount, codeOptions };
};

export default useRows;
