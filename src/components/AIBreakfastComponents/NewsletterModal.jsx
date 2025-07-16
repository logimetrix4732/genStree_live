import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  alpha,
  Fade,
  Slide,
  Avatar,
  InputAdornment,
} from "@mui/material";
import {
  Close as CloseIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  AutoAwesome as SparklesIcon,
  Favorite as HeartIcon,
  Star as StarIcon,
  Bolt as ZapIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Animations
const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
`;

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

const confettiAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`;

export const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const theme = useTheme();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubscribed(true);
    setShowConfetti(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
      setShowConfetti(false);
      onClose();
    }, 4000);
  };

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        width: 8,
        height: 8,
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
        borderRadius: "50%",
        animation: showConfetti
          ? `${confettiAnimation} 3s ease-out forwards`
          : "none",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        opacity: 0.8,
      }}
    />
  ));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 6,
          overflow: "hidden",
          maxWidth: "550px",
          maxHeight: "90vh",
          mx: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up", timeout: 500 }}
    >
      {showConfetti && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          {confettiElements}
        </Box>
      )}

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 20,
          bgcolor: alpha("#ffffff", 0.2),
          backdropFilter: "blur(8px)",
          color: "white",
          "&:hover": {
            bgcolor: alpha("#ffffff", 0.3),
            transform: "scale(1.1) rotate(90deg)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
          maxHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Banner/Header */}
        <Box
          sx={{
            height: { xs: 200, sm: 250 },
            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main}, #a855f7)`,
            position: "relative",
            overflow: "hidden",
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          }}
        >
          <Box sx={{ position: "absolute", inset: 0 }}>
            <Box
              sx={{
                position: "absolute",
                top: 40,
                left: 40,
                width: 12,
                height: 12,
                bgcolor: alpha("#fff", 0.4),
                borderRadius: "50%",
                animation: `${ping} 3s infinite`,
              }}
            />
            <SparklesIcon
              sx={{
                position: "absolute",
                top: 64,
                right: 128,
                fontSize: "1.5rem",
                color: alpha("#fff", 0.6),
                animation: `${spin} 4s linear infinite`,
              }}
            />
            <StarIcon
              sx={{
                position: "absolute",
                bottom: 96,
                left: 64,
                fontSize: "1.25rem",
                color: alpha("#fff", 0.5),
                animation: `${pulse} 2s infinite`,
              }}
            />
            <ZapIcon
              sx={{
                position: "absolute",
                top: 96,
                left: 96,
                fontSize: "1rem",
                color: alpha("#fff", 0.7),
                animation: `${bounce} 2s infinite`,
              }}
            />
            <HeartIcon
              sx={{
                position: "absolute",
                bottom: 128,
                right: 96,
                fontSize: "1rem",
                color: alpha("#fff", 0.6),
                animation: `${pulse} 2.5s infinite`,
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: alpha("#000", 0.8),
                backdropFilter: "blur(8px)",
                borderRadius: 3,
                p: 2,
                border: `1px solid ${alpha("#fff", 0.2)}`,
                "&:hover": { transform: "scale(1.1) rotate(3deg)" },
                transition: "all 0.5s ease",
              }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  AI
                </Typography>
              </Avatar>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 32,
              bgcolor: "white",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}
          />
        </Box>

        {/* Scrollable Form Area */}
        <Box
          sx={{
            p: { xs: 3, sm: 4 },
            flex: 1,
            overflowY: "auto",
          }}
        >
          {!isSubscribed ? (
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  animation: `${fadeInUp} 0.6s ease-out`,
                }}
              >
                Genstree AI bulletin
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A curated roundup of the most impactful AI news and products.
              </Typography>
              <form onSubmit={handleSubscribe}>
                <TextField
                  fullWidth
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading || !email}
                  sx={{
                    py: 1.2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, #a855f7)`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  {isLoading ? (
                    <>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTop: "2px solid white",
                          borderRadius: "50%",
                          animation: `${spin} 1s linear infinite`,
                          mr: 1,
                        }}
                      />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <SparklesIcon sx={{ fontSize: "1.25rem", mr: 1 }} />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </Box>
          ) : (
            <Fade in={isSubscribed} timeout={500}>
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: alpha(theme.palette.success.main, 0.1),
                    animation: `${bounce} 1s infinite`,
                    mx: "auto",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: theme.palette.success.main,
                    }}
                  />
                </Avatar>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                  Welcome aboard! 🎉
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  You've successfully subscribed to Genstree AI bulletin.
                  <br />
                  Check your inbox for a confirmation email.
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    gap: 0.5,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        fontSize: "1.25rem",
                        color: "#f59e0b",
                        animation: `${bounce} 1s infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
