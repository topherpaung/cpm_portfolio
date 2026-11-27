import React, {useState, useEffect} from "react";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Main,
  Timeline,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    useEffect(() => {
        const updateBackToTopVisibility = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
        updateBackToTopVisibility();

        return () => window.removeEventListener('scroll', updateBackToTopVisibility);
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
        {showBackToTop && (
            <Fab
                aria-label="Back to top"
                title="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                sx={{
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                    zIndex: 1200,
                    color: '#fff',
                    backgroundColor: '#5000ca',
                    '&:hover': { backgroundColor: '#3d0099' },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        )}
    </div>
    );
}

export default App;
