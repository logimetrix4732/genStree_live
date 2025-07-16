import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import genVoiceImg from "../assets/images/genVoiceImg.png";
import { AutoAwesome as SparklesIcon } from "@mui/icons-material";
import MainContent from "../components/AIBreakfastComponents/MainContent";
import { NewsletterModal } from "../components/AIBreakfastComponents/NewsletterModal";
import {
  Box,
  Button,
  useTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

const GenVoice = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const theme = useTheme();

  return (
    <React.Fragment>
      <main>
        <NavBar />
        <header
          className="page-header"
          style={{
            backgroundImage: `url(${genVoiceImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div className="inner" style={{ width: "100%" }}>
            <div className="container">
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(2rem, 10vw, 6rem)",
                  lineHeight: "1.2",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                Genstree AI bulletin
              </h1>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: { xs: 3, sm: 4, md: 5 },
                  flexWrap: "wrap",
                }}
              >
                <Button
                  onClick={() => setIsNewsletterOpen(true)}
                  variant="contained"
                  sx={{
                    background: "white",
                    color: "black",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "32px",
                    fontWeight: 600,
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                      color: "white",
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                      "& .sparkles-icon": {
                        opacity: 1,
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  <SparklesIcon
                    className="sparkles-icon"
                    sx={{
                      mr: 1,
                      fontSize: "1.2rem",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Box
                    component="span"
                    sx={{ position: "relative", zIndex: 1 }}
                  >
                    Subscribe
                  </Box>
                </Button>
              </Box>
            </div>
          </div>
        </header>
        <main>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainContent onNewsletterClick={() => setIsNewsletterOpen(true)} />
            <NewsletterModal
              isOpen={isNewsletterOpen}
              onClose={() => setIsNewsletterOpen(false)}
            />
          </ThemeProvider>
        </main>
      </main>
    </React.Fragment>
  );
};

export default GenVoice;
