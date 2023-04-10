import {Box, Grid, Typography} from '@mui/material';
import cover_background from '../assets/img/picture.jpg';
import {MailOutline, GitHub, LinkedIn} from '@mui/icons-material';


export const Cover = () => {
    const links = [
        { url: 'mailto:mpramlall@gmail.com', icon: <MailOutline /> },
        { url: 'https://github.com/ShockwaveZA', icon: <GitHub /> },
        { url: 'https://www.linkedin.com/in/minal-pramlall-b1817510b', icon: <LinkedIn /> },
    ]

    return (
        <Box
            sx={{
                backgroundImage: `url(${cover_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '250px 10% 250px 10%',

                            hr: {
                                borderTop: '1px solid #D2D2D238',
                                width: '100%',
                            },
                        }}
                    >
                        <Typography variant={'h2'} fontWeight={'bold'}>Minal</Typography>
                        <Typography variant={'h2'} fontWeight={'bold'}>Pramlall</Typography>
                        <Typography variant={'h5'}>Intermediate Software Engineer</Typography>
                        <hr />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '5px',

                                '& > a': {
                                    height: '40px',
                                    width: '40px',
                                    backgroundColor: 'rgba(100,100,100,0.38)',
                                    borderRadius: '50%',
                                    color: 'white',
                                    transition: '0.4s',

                                    '&:hover': {
                                        color: 'black',
                                        backgroundColor: 'white',
                                    },

                                    '& > svg': {
                                        transform: 'translateX(8px) translateY(8px)'
                                    }
                                },
                            }}
                        >
                            {links.map((link, index) => (
                                <a href={link.url} target={'_blank'} key={index}>{link.icon}</a>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}