"use client";

import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import { DarkMode, LightMode, Translate } from "@mui/icons-material";
import Flag from "react-world-flags";
import { useTheme } from "@/context/theme.context";
import { useLanguage } from "@/context/language.context";
import { languages, languageFlags, type Language } from "@/config/languages";

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { mode, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.85)"
              : "rgba(248, 250, 252, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          boxShadow: "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              onClick={() => {}}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                color: "primary.main",
                fontFamily: "Caveat",
                fontWeight: 700,
              }}
            >
              {t("navbar.tagline")}
            </Typography>

            <IconButton
              onClick={handleLanguageMenuOpen}
              sx={{ mr: 2 }}
              title="Change language"
            >
              <Translate sx={{ color: "primary.main" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              slotProps={{
                paper: {
                  sx: {
                    backdropFilter: "blur(20px)",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(15, 23, 42, 0.75)"
                        : "rgba(248, 250, 252, 0.75)",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 8px 32px rgba(59, 130, 246, 0.15)"
                        : "0 8px 32px rgba(30, 64, 175, 0.1)",
                    borderRadius: "12px",
                    mt: 1,
                    p: 1,
                  },
                },
              }}
            >
              {(Object.entries(languages) as [Language, string][]).map(
                ([langCode, langName]) => (
                  <MenuItem
                    key={langCode}
                    onClick={() => handleLanguageChange(langCode)}
                    selected={language === langCode}
                    sx={{
                      backgroundColor:
                        language === langCode
                          ? (theme) => theme.palette.primary.main + "15"
                          : (theme) => theme.palette.divider + "08",
                      gap: 1.5,
                      transition: "all 0.2s ease",
                      borderRadius: "8px",
                      mb: 0.5,
                      "&:last-child": {
                        mb: 0,
                      },
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.primary.main + "20",
                      },
                    }}
                  >
                    <Flag
                      code={languageFlags[langCode]}
                      style={{ width: 24, height: 16, borderRadius: 2 }}
                    />
                    {langName}
                  </MenuItem>
                ),
              )}
            </Menu>

            <IconButton onClick={toggleTheme} sx={{ mr: 2 }}>
              {mode === "dark" ? (
                <LightMode sx={{ color: "primary.main" }} />
              ) : (
                <DarkMode sx={{ color: "primary.main" }} />
              )}
            </IconButton>

            <Button
              variant="contained"
              // onClick={() => router.push("/")}
              size={isMobile ? "small" : "medium"}
              disableElevation
              sx={{ ml: 2 }}
            >
              {t("navbar.hire")}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
