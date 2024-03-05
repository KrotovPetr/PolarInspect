import {Alert, Card, Text} from '@gravity-ui/uikit';
import classes from './Home.module.css';

export const Home = () => {
    const news = [{date: '05.03.2024', title: 'Добавлена карта Яндекс'}];
    return (
        <Card type="action" className={classes.card}>
            <Text>Whats new?</Text>
            {news.map((elem, id) => (
                <Alert theme={'normal'} title={elem.date} message={elem.title} key={id} />
            ))}
        </Card>
    );
};
