import {Grid, Box, Typography} from '@mui/material';
import {contactItems} from '../shared/data';

export const Contact = () => {
    return (
        <Box
            id={'contact'}
            sx={{
                padding: '80px 5% 80px 5%',
                backgroundColor: '#fafafa'
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Contact</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} p={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '16px',
                        }}
                    >
                        {contactItems.map((item, i) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                }}
                            >
                                <Typography key={i} color={'text.primary'}><strong>{item.header}</strong></Typography>
                                <Typography key={i} color={'text.secondary'}>{item.content}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}