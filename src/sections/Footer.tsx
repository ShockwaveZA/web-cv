import {Box, Typography} from '@mui/material';
import reactLogo from '../assets/react.svg';
import {keyframes} from '@emotion/react';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Footer = () => {
    return (
        <Box
            sx={{
                padding: '80px 5% 80px 5%',
                backgroundColor: '#fafafa',
                textAlign: 'center',

                img: {
                    animation: `${spin} infinite 20s linear`,
                    margin: '24px',
                    height: '64px',
                },
            }}
        >
            <Typography color={'text.primary'} fontWeight={'bold'}>This CV is written in React</Typography>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </Box>
    )
}