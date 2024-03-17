import {Portal, PortalProvider} from '@gravity-ui/uikit';
import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode;
};

export const CustomPortal: FC<Props> = ({children}) => {
    const myRoot = document.getElementById('portal');

    return (
        <PortalProvider container={myRoot as any}>
            <Portal>{children}</Portal>
        </PortalProvider>
    );
};
