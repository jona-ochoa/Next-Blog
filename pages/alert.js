import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function alert() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <Button variant="outlined" color="error" href="/App" passHref>
                    About
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Button variant="outlined" color="secondary" href="/App" passHref>
                    Example
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Button variant="contained" color="error" href="/App" passHref>
                    App
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Button
                  variant="contained"
                    color="success"
                    href="/ButtonBases"
                    endIcon={<SendIcon />}
                    passHref
                  >
                    ButtonBases
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
