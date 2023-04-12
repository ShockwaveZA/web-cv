import {Grid, Box, Typography, LinearProgress} from '@mui/material';
import {educationalExperience, languageExperience, otherExperience} from '../shared/data';
import {mapToLanguageExperienceItem} from '../shared/util';

export const Skills = () => {
    return (
        <Box
            id={'skills'}
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Skills</Typography>
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
                        <Typography variant={'h6'} color={'text.primary'}>Primary Languages</Typography>

                        {languageExperience.map(mapToLanguageExperienceItem).map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    marginBottom: '16px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '16px',
                                        width: '100%',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            img: {
                                                height: '24px',
                                            }
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={'bold'} color={'text.primary'}>{item.name}</Typography>
                                    </Box>
                                    <Box marginLeft={'auto'}>
                                        <Typography color={'text.primary'}>{item.label}</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <LinearProgress
                                        variant={'determinate'}
                                        value={item.value}
                                        color={'primary'}
                                    />
                                </Box>
                            </Box>
                        ))}

                        <Typography variant={'h6'} color={'text.primary'}>Other Technologies</Typography>
                        <ul>
                            {otherExperience.map((item, i) => (
                                <li key={i}><Typography color={'text.secondary'}>{item}</Typography></li>
                            ))}
                        </ul>

                        <Typography variant={'h6'} color={'text.primary'}>Technologies used in own capacity</Typography>
                        <ul>
                            {educationalExperience.map((item, i) => (
                                <li key={i}><Typography color={'text.secondary'}>{item}</Typography></li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}