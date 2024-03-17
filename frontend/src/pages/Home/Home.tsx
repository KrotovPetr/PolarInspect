import {Alert, Card, Text} from '@gravity-ui/uikit';
import classes from './Home.module.css';

export const Home = () => {
    const news = [
        {date: '05.03.2024', title: 'Добавлена карта Яндекс'},
        {date: '07.03.2024', title: 'Добавил кастомную карту от Яндекс'},
        {date: '14.03.2024', title: 'Переделал страницу с мониторингом'},
        {date: '15.03.2024', title: 'Добавил страницу со статистикой'},
        {date: '16.03.2024', title: 'Добавил интернационализацию'},
    ];
    return (
        <Card type="action" className={classes.card}>
            <Text>Whats new? Click on "Monitoring"</Text>
            {news.map((elem, id) => (
                <Alert theme={'normal'} title={elem.date} message={elem.title} key={id} />
            ))}
        </Card>
    );
};
