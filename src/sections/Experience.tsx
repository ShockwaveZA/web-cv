import {Grid, Box, Typography, LinearProgress} from '@mui/material';
import {educationalExperience, experience, languageExperience, otherExperience} from '../shared/data';
import {mapToLanguageExperienceItem} from '../shared/util';

export const Experience = () => {
    return (
        <Box
            id={'experience'}
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
                        <Typography variant={'h5'} fontWeight={'bold'} color={'text.primary'}>Experience</Typography>
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
                        {experience.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography color={'text.primary'} fontWeight={'bold'}>
                                    {item.title}, {item.company} ({item.startYear}
                                    {item.startYear !== item.endYear && ` - `}
                                    {!item.endYear ? 'current' : item.endYear === item.startYear ? '' : item.endYear})
                                </Typography>
                                {item.duties.map((dutyItem, dutyIndex) => (
                                    <div key={dutyIndex}>
                                        <Typography color={'text.secondary'}>{dutyItem.duty}</Typography>
                                        <ul>{dutyItem.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex}>
                                                <Typography color={'text.secondary'}>{task}</Typography>
                                            </li>
                                        ))}</ul>
                                    </div>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}