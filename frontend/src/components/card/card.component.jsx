import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";

export const AppCard = ({children, icon, title, subtitle, sx = {}}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderColor: (theme) => theme.palette.divider,
                ...sx,
            }}
        >
            <CardHeader
                title={
                    <Typography variant="h6" fontWeight={600}>
                        {title}
                    </Typography>
                }
                subheader={subtitle}
                avatar={
                    <Avatar variant="rounded" sx={{bgcolor: "primary.main", color: "white"}}>
                        {icon}
                    </Avatar>
                }
            />
            <CardContent sx={{pt: 2}}>{children}</CardContent>
        </Card>
    );
};

export const AboutCard = ({children}) => {
    return (
        <Card
            variant="outlined"
            sx={{borderColor: (theme) => theme.palette.divider, pb: 3}}
        >
            <CardContent sx={{pt: 3}}>{children}</CardContent>
        </Card>
    );
};