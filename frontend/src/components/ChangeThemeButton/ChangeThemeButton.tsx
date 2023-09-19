import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import type { Theme } from '@mui/material';
import { IconButton, Tooltip } from '@mui/material';

interface IChangeThemeButton {
  theme: Theme;
  themeColor: {
    toggleColorMode: () => void;
  };
}

const ChangeThemeButton = ({ theme, themeColor }: IChangeThemeButton) => {
  return (
    <Tooltip title="Change theme">
      <IconButton
        onClick={themeColor.toggleColorMode}
        color="inherit"
        sx={{ position: 'absolute', top: '1%', right: '1%' }}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ChangeThemeButton;
