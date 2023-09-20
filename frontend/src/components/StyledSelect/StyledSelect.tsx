import { SelectBody } from './StyledSelect.styles';

interface IStyledSelect {
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
  placeholder?: string | undefined;
}

const StyledSelect = ({ variant, placeholder }: IStyledSelect) => {
  return <SelectBody variant={variant} placeholder={placeholder} />;
};

export default StyledSelect;
