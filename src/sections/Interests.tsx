import {Grid, Box, Typography} from '@mui/material';
import {interests} from '../shared/data';

export const Interests = () => {
    return (
        <Box
            id={'interests'}
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Interests</Typography>
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
                        <ul>
                            {interests.map((interest, i) => (
                                <li key={i}>
                                    <Typography color={'text.secondary'}>{interest}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}