import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";


const url = "https://www.breakingbadapi.com/api/characters";

function BreakingBad() {
   const [characters, setCharacters] = useState([]);
   const [logged, setLogged] = useState(
     localStorage.getItem("isLoggedin")==="true" ? "true" : "false"
   );
   useEffect(() => {
     axios.get(url).then((res) => {
       setCharacters(res.data);
     });
   }, []);
  return (
    <div>
      <div>
        <div>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <br />
          </Grid>
          <Typography variant="h4">All characters</Typography>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  borderRadius={16}
                  boxShadow={3}
                  bgcolor="background.paper"
                  p={1}
                  m={1}
                  style={{ width: "100%" }}
                >
                  <Stack
                    direction="column"
                    spacing={2}
                    align="center"
                    justify="center"
                  >
                    <img
                      className="ExampleImage"
                      src={character.img}
                      alt={character.name}
                    />
                    <Typography variant="h6">{character.name}</Typography>
                    <Typography variant="body1">
                      <b>birthday:</b> {character.birthday}
                    </Typography>
                    <Typography variant="body1">
                      <b>occupation:</b> {character.occupation}
                    </Typography>
                    <Typography variant="body1">
                      <b>status:</b> {character.status}
                    </Typography>
                    <Typography variant="body1">
                      <b>appearance in seasons:</b> {character.appearance + " "}
                    </Typography>
                    <Typography variant="body1">
                      <b>portrayed:</b> {character.portrayed}
                    </Typography>
                    <Typography variant="body1">
                      <b>category:</b> {character.category}
                    </Typography>
                    <Typography variant="body1">
                      <b>eyeColour:</b> {character.eyeColour}
                    </Typography>
                    <Typography variant="body1">
                      <b>better_call_saul_appearance:</b>{" "}
                      {character.better_call_saul_appearance + " "}
                    </Typography>
                    {logged === "true" ? (
                      <>
                        <Button
                          onClick={() => {
                            axios
                              .post(
                                "http://localhost:5000/api/favourites/breakingbad/add",
                                {
                                  name: character.name,
                                  birthday: character.birthday,
                                  occupation: character.occupation[0],
                                  status: character.status,
                                  image: character.img,
                                  portrayed: character.portrayed,
                                  category: character.category,
                                  uniqueID: "breakingbad",
                                  username: localStorage.getItem("username"),
                                }
                              )
                              .then((res) => console.log(res.data))
                              .catch((err) => console.log(err));
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Add to favorites
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default BreakingBad;
