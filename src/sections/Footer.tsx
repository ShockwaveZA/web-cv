import {Box, Typography} from '@mui/material';
import reactLogo from '../assets/react.svg';

export const Footer = () => {
    return (
        <Box
            sx={{
                padding: '80px 5% 80px 5%',
                backgroundColor: '#fafafa',
                textAlign: 'center',

                img: {
                    margin: '24px',
                    height: '64px',
                },

                // TODO: get working
                '@keyframes logo-spin': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },

                '@media (prefers-reduced-motion: no-preference)': {
                    'a': {
                        animation: 'logo-spin infinite 20s linear',
                    },
                },
            }}
        >
            <Typography color={'text.primary'} fontWeight={'bold'}>This CV is powered by</Typography>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </Box>
    )
}