import {Grid, Box, Typography} from '@mui/material';
import {spokenLanguages} from '../shared/data';

export const SpokenLanguages = () => {
    return (
        <Box
            id={'spoken-languages'}
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Spoken Languages</Typography>
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
                        {spokenLanguages.map((language, i) => (
                            <Typography key={i} color={'text.secondary'}><strong>{language.name}</strong> - {language.level}</Typography>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}