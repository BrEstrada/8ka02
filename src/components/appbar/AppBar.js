import React from 'react';

import {
    IoEllipsisVertical,
    IoNotificationsOutline,
    IoMailOutline,
    IoPersonCircleOutline,
} from 'react-icons/io5';

import { AppBarItems, AppBarStyles, AppBarItem } from './styles';
import { IconButton } from './../../ui/buttons';

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>branding</AppBarItem>
                <AppBarItem>
                    <IconButton>
                        <IoMailOutline size="1.125rem" color="grey" />
                    </IconButton>

                    <IconButton>
                        <IoNotificationsOutline size="1.125rem" color="grey" />
                    </IconButton>
                    <IconButton>
                        <IoPersonCircleOutline size="2rem" color="grey" />
                    </IconButton>
                    <IconButton>
                        <IoEllipsisVertical size="1.125rem" color="grey" />
                    </IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
