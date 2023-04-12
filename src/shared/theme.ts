import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#6d76ec',
            main: '#007fc2',
            dark: '#0206a1',
            contrastText: '#dedede',
        },
        secondary: {
            light: '#41d290',
            main: '#19a467',
            dark: '#156741',
            contrastText: '#ececec',
        },
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        text: {
            primary: '#515769',
            secondary: '#A6A7AA',
            disabled: '#c2c2c2',
        },
        error: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        warning: {
            main: '#ff9100',
            light: 'rgba(255,167,51,0.95)',
        },
        info: {
            main: '#2395f1',
            light: '#54acf3',
            dark: '#1768a8',
        },
        success: {
            main: '#03ec7a',
            light: '#44f7a0',
            dark: '#04984f',
        },
        divider: '#fff',
    },
});