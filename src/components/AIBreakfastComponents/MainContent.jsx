import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  alpha,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Twitter as TwitterIcon,
  TrendingUp,
  Psychology as BrainIcon,
  Bolt as ZapIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import WOW from "wowjs";
import "animate.css";
import { Link } from "react-router-dom";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContent = ({ onNewsletterClick }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const newsLetter = [
    {
      id: 1,
      date: "21, June 2025",
      title:
        "Smart Villages: Climate insights, Technology Shifting and Transforming Agriculture in India",
      excerpt:
        "India is building smart villages by combining climate-smart farming, new technologies, and better ways to grow crops...",
      content:
        "India is building smart villages by combining climate-smart farming, new technologies, and better ways to grow crops to help farmers boost yield, manage water better, and survive climate change. Many districts have reported significant improvements using IoT sensors, AI-based advisory, and solar irrigation systems...",
    },
    {
      id: 2,
      date: "26, April 2025",
      title:
        'Empowering Women: "From Kharcha to Kaushal: Building Financial Strength Awareness through Technology"',
      excerpt:
        "Before the wave of AI and advanced technology, women managing work-life balance and savings was very complex...",
      content:
        "Women across India are now using AI tools and mobile apps to manage their finances, improve skills, and earn through digital platforms. These changes have led to more self-dependence and entrepreneurship in rural as well as urban areas...",
    },
  ];

  const handleReadMore = (item) => {
    setSelectedNews(item);
    setModalOpen(true);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 8,
          px: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Circles */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "40px",
              width: "128px",
              height: "128px",
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.light,
                0.1
              )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `${pulse} 4s ease-in-out infinite`,
            }}
          />
        </Box>

        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", position: "relative", zIndex: 10 }}
        >
          <h1
            className="text-blk subHeadingText wow"
            data-splitting=""
            style={{
              marginBottom: "16px",
              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              lineHeight: 1.3,
              fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
            }}
          >
            AI for Women: Smarter. Stronger. Bolder.
          </h1>

          <div
            className="text-blk description wow"
            data-splitting=""
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Stay informed with inspiring stories, smart tools, and breakthrough
            innovations that are shaping a smarter, more inclusive future for
            women in technology, leadership, and society.
          </div>
        </Container>
      </Box>

      {/* Search */}
      <Box sx={{ px: 3, py: 4 }}>
        <Container maxWidth="lg">
          <TextField
            fullWidth
            placeholder="Search posts..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    mr: 1,
                    color: searchFocused
                      ? theme.palette.secondary.main
                      : "text.secondary",
                    transform: searchFocused ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                py: 1,
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                },
                "&.Mui-focused": {
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.secondary.main,
                    0.2
                  )}`,
                },
              },
            }}
          />
        </Container>
      </Box>

      {/* Newsletter Cards */}
      <Box sx={{ px: 3, pb: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {newsLetter.length > 0
              ? newsLetter.map((item, index) => (
                  <Paper
                    key={item.id}
                    elevation={2}
                    className="wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      },
                      "&:active": {
                        transform: "scale(0.97)", // scale effect on click
                        boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
                      },
                    }}
                    onClick={() => onNewsletterClick(item)} // pass item
                  >
                    <h2
                      className="text-blk subHeadingText wow"
                      data-splitting=""
                    >
                      {item.title}
                    </h2>
                    <div className="text-blk description wow" data-splitting="">
                      {item.excerpt}
                    </div>
                    <Link to={`/newsletter/1`} className="post-link">
                      READ MORE
                    </Link>
                  </Paper>
                ))
              : [1, 2, 3].map((item) => (
                  <Paper
                    key={item}
                    elevation={1}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      transition: "all 0.5s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Skeleton variant="text" width="75%" height={24} />
                    <Skeleton variant="text" width="100%" height={16} />
                    <Skeleton variant="text" width="85%" height={16} />
                    <Skeleton variant="text" width="65%" height={16} />
                  </Paper>
                ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainContent;
