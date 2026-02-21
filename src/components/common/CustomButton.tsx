import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  customColor?: string;
  customTextColor?: string;
  to?: string;
}

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'customTextColor',
})<CustomButtonProps>(({ customColor = '#346fef', customTextColor }) => ({
  fontWeight: 600,
  fontSize: '15px',
  textTransform: 'capitalize',
  height:'40px',
  transition: 'transform 180ms ease, box-shadow 200ms ease, opacity 180ms ease',

  '&.MuiButton-contained': {
    backgroundColor: `${customColor} !important`,
    color: `${customTextColor ?? '#ffffff'} !important`,
    '&:hover, &:focus, &:focus-visible': {
      backgroundColor: `${customColor} !important`,
      outline: "none",
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 22px rgba(35, 35, 33, 0.2)',
    },
    '&.Mui-disabled': {
      backgroundColor: `rgba(0, 0, 0, 0.12) !important`,
      color: `rgba(0, 0, 0, 0.26) !important`,
    },
  },

  '&.MuiButton-outlined': {
    borderColor: `${customColor} !important`,
    color: `${customTextColor ?? customColor} !important`,
    backgroundColor: `transparent !important`,
    '&:hover, &:focus, &:focus-visible': {
      backgroundColor: `transparent !important`,
      borderColor: `${customColor} !important`,
      outline: "none",
      transform: 'translateY(-1px)',
    },
    '&.Mui-disabled': {
      borderColor: `rgba(0, 0, 0, 0.26) !important`,
       backgroundColor: `rgba(0, 0, 0, 0.12) !important`,
      color: `rgba(0, 0, 0, 0.26) !important`,
    },
  },
}));
