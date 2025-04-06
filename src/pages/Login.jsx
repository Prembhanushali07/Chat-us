import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import { Block, CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { usernameValidation } from "../utils/validators";

function Login() {
  const [isLogin, setisLogin] = useState(true);
  const toggleLogin = () => {
    setisLogin(!isLogin);
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidation);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "2rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} marginTop={"15px"}>
                OR
              </Typography>
              <Button
                variant="text"
                color="secondary"
                onClick={toggleLogin}
                fullWidth
              >
                Sign up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.8)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      required
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography
                  width={"fit-content"}
                  m={"1rem auto"}
                  display={"block"}
                  variant="caption"
                  color="error"
                >
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error">{username.error}</Typography>
              )}

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error">{password.error}</Typography>
              )}

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} marginTop={"10px"}>
                OR
              </Typography>
              <Button
                variant="text"
                color="secondary"
                onClick={toggleLogin}
                fullWidth
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
