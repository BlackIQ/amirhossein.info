import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";

export const AppCard = ({children, icon, title, subtitle, sx = {}}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "rgba(30, 41, 59, 0.75)"   // Glass dark
                        : "rgba(255, 255, 255, 0.85)", // Glass light
                backdropFilter: "blur(16px)",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                        ? "0 8px 32px rgba(0, 0, 0, 0.4)"
                        : "0 8px 32px rgba(0, 0, 0, 0.1)",
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
                    <Avatar sx={{bgcolor: "primary.main", color: "white"}}>
                        {icon}
                    </Avatar>
                }
                sx={{
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            />
            <CardContent sx={{pt: 3}}>{children}</CardContent>
        </Card>
    );
};

export const AboutCard = ({children}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "rgba(30, 41, 59, 0.75)"
                        : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(16px)",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                        ? "0 8px 32px rgba(0, 0, 0, 0.4)"
                        : "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
        >
            <CardContent sx={{pt: 3}}>{children}</CardContent>
        </Card>
    );
};