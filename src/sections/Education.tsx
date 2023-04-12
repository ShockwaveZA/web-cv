import {Grid, Box, Typography} from '@mui/material';
import {education} from '../shared/data';

export const Education = () => {
    return (
        <Box
            id={'education'}
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Education</Typography>
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
                        {education.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography color={'text.primary'} fontWeight={'bold'}>{item.institution}, {item.startYear}{item.endYear ? ` - ${item.endYear}` : ''}</Typography>
                                <Typography color={'text.secondary'}>{item.qualification}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}