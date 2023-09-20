import { MenuItem } from '@mui/material';

import { SelectBody, SelectorName } from './StyledSelect.styles';
import SelectorMenuProps from './data/SelectorMenuProps';

interface IStyledSelect {
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
  placeholder?: string | undefined;
  stack?: unknown[] | undefined;
}

const StyledSelect = ({ variant, placeholder, stack }: IStyledSelect) => {
  return (
    <SelectBody
      variant={variant}
      value={placeholder}
      label={placeholder}
      MenuProps={SelectorMenuProps}>
      <MenuItem disabled value={placeholder}>
        <SelectorName>{placeholder}</SelectorName>
      </MenuItem>
      {stack &&
        stack.map((el) => (
          <MenuItem key={String(el)} value={String(el)}>
            {String(el)}
          </MenuItem>
        ))}
    </SelectBody>
  );
};

export default StyledSelect;
