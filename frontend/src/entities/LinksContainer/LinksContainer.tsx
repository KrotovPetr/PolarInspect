import {FC} from 'react';
import {Link} from 'react-router-dom';
import classes from './LinksContainer.module.css';

type TLink = {
    to: string;
    content: string;
};
type Props = {
    links: TLink[];
};

export const LinksContainer: FC<Props> = ({links}) => {
    return (
        <div className={classes.links}>
            {links.map((link: TLink) => {
                return (
                    <Link key={link.to} to={link.to} className={classes.link}>
                        {link.content}
                    </Link>
                );
            })}
        </div>
    );
};
