import {
    Avatar,
    Divider,
    Drawer,
    useTheme,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Icon
} from '@mui/material';

import { Box } from '@mui/system';

interface ISideBar {
    children?: React.ReactNode;
}
export const SideBar: React.FC<ISideBar> = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Drawer variant="permanent">
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            alt="dev"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCYdUQ6U7PxYpRtYjfxcDE003BnnsCafwKAQMRbGxYszx-mEJYoHH0Ttls6bZ5D4Ur0c&usqp=CAU"
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12)
                            }}
                        />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Páginas Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};