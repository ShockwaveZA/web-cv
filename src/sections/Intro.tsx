import {Grid, Box, Typography} from '@mui/material';

export const Intro = () => {
    return (
        <Box
            id={'intro'}
            sx={{
                padding: '80px 5% 80px 5%',
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={12} md={4} p={2}>
                    <Box
                        sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'center',
                                md: 'right',
                            },
                        }}
                    >
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Intro</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} p={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        <Typography paragraph={true} color={'text.secondary'}>
                            Hi! I'm Minal Pramlall, I strive to be a modest and hard-working individual, I have a passion for software development and design. I aim to work in environments where I can make a meaningful impact and, at the same time, build on my experience and expertise. I think that one should treat others how they would like to be treated, hence I strive to foster healthy relationships with co-workers as well as the clients.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}