import {Box, Collapse, Typography, useMediaQuery, useTheme} from '@mui/material';
import {navbarItems} from '../shared/data';
import {useEffect, useState} from 'react';
import {Menu} from '@mui/icons-material';


export const Navbar = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isAtTop, setIsAtTop] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setIsAtTop(() => window.scrollY === 0);
            setShowDropdown(() => false);
        }
    })

    const toggleDropdown = () => setShowDropdown(prev => !prev);

    const handleNavbarClick = (item) => {
        document.getElementById(item.id).scrollIntoView({behavior: 'smooth'});
    }

    const mapNavbarItem = (navbarItem, index): JSX.Element => {
        return (
            <Box
                key={index}
                onClick={() => handleNavbarClick(navbarItem)}
                sx={{
                    span: {
                        position: 'absolute',
                        border: '1px solid black',
                        borderColor: 'primary.main',
                        width: '8px',
                        transform: 'translateX(-16px) translateY(8px)',
                        opacity: 0,
                        transition: '0.4s',
                    },
                    padding: '8px 16px 8px 16px',

                    '&:hover': {
                        '& > span': {
                            opacity: 1,
                            transition: '0.4s',
                        }
                    }
                }}
            >
                <span />
                <Typography color={isAtTop ? 'black' : 'text.primary'} fontSize={'0.8rem'} fontWeight={'bold'}>{navbarItem.label.toUpperCase()}</Typography>
            </Box>
        )
    }

    const desktopNavbar = (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                height: '96px',
                width: '100%',
                backgroundColor: isAtTop ? 'rgba(255,255,255,0)' : 'white',
                transition: '0.4s',
                borderBottom: '1px solid silver',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    padding: '0 5% 0 5%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'right',
                    alignItems: 'center',
                }}
            >
                {navbarItems.map((item, i) => mapNavbarItem(item, i))}
            </Box>
        </Box>
    );

    const mobileNavbar = (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                height: '96px',
                width: '100%',
                backgroundColor: 'white',
                transition: '0.4s',
                borderBottom: '1px solid silver',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    padding: '0 5% 0 5%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'right',
                    alignItems: 'center',

                    '& > *': {
                        padding: '24px',
                        transition: '0.4s',
                        cursor: 'pointer',

                        '&:hover': {
                            color: 'primary.main',
                            transition: '0.4s',
                        }
                    },
                }}
            >
                <Menu onClick={toggleDropdown} />
            </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        position: 'fixed',
                        top: '96px',
                        width: '100%',
                        borderBottom: '1px solid silver',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0 5% 0 5%',
                        }}
                    >
                        <Collapse in={showDropdown}>
                                {navbarItems.map((item, i) => mapNavbarItem(item, i))}
                        </Collapse>
                    </Box>
                </Box>
        </Box>
    );

    return isMobile ? mobileNavbar : desktopNavbar;
}