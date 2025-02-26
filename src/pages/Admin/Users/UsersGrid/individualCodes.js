import { useCodes } from '../../../../redux/selectors';

const useIndividualCodes = () => {
  const { individualCodes } = useCodes();

  return individualCodes;
};

export default useIndividualCodes;
