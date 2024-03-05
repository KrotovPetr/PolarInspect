import {ThemeProvider} from '@gravity-ui/uikit';
import {Header} from '../widgets';
import {AppRouter} from './providers/router/ui/AppRouter';
import classes from './styles/App.module.css';
import {useState} from 'react';

const App = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const click = () => {
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <Header click={click} theme={theme} />
                <div className={classes.content}>
                    <AppRouter />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default App;
