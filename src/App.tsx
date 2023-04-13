import {Box, ThemeProvider} from '@mui/material';
import {Cover} from './sections/Cover';
import {Intro} from './sections/Intro';
import {theme} from './shared/theme';
import {Education} from './sections/Education';
import {Experience} from './sections/Experience';
import {Skills} from './sections/Skills';
import {SpokenLanguages} from './sections/SpokenLanguages';
import {Interests} from './sections/Interests';
import {Contact} from './sections/Contact';
import {Footer} from './sections/Footer';
import {Navbar} from './components/Navbar';

export const App = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Navbar />
                    <Cover />
                    <Intro />
                    <Education />
                    <Experience />
                    <Skills />
                    <SpokenLanguages />
                    <Interests />
                    <Contact />
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    )
}
