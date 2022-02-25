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

const url = "http://hp-api.herokuapp.com/api/characters";


function Harrypotter() {
  const [characters, setCharacters] = useState(
[]
  );
  const [logged, setLogged] = useState(
    localStorage.getItem("isLoggedin") === "true" ? "true" : "false"
  );
  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacters(res.data);
    });
  }, []);
  return (
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
                    src={character.image}
                    alt={character.name}
                  />
                  <Typography variant="h6">{character.name}</Typography>
                  <Typography variant="body1">
                    <b>Species:</b> {character.species}
                  </Typography>
                  <Typography variant="body1">
                    <b>Gender:</b> {character.gender}
                  </Typography>
                  <Typography variant="body1">
                    <b>house:</b> {character.house}
                  </Typography>
                  <Typography variant="body1">
                    <b>dateOfBirth:</b> {character.dateOfBirth}
                  </Typography>
                  <Typography variant="body1">
                    <b>yearOfBirth:</b> {character.yearOfBirth}
                  </Typography>
                  <Typography variant="body1">
                    <b>ancestry:</b> {character.ancestry}
                  </Typography>
                  <Typography variant="body1">
                    <b>eyeColour:</b> {character.eyeColour}
                  </Typography>
                  <Typography variant="body1">
                    <b>hairColour:</b> {character.hairColour}
                  </Typography>
                  <Typography variant="body1">
                    <b>actor:</b> {character.actor}
                  </Typography>
                  {logged === "true" ? (
                    <>
                      <Button
                        onClick={() => {
                          axios
                            .post(
                              "http://localhost:5000/api/favourites/harrypotter/add",
                              {
                                name: character.name,
                                species: character.species,
                                Gender: character.Gender,
                                house: character.house,
                                image: character.image,
                                yearOfBirth: character.yearOfBirth,
                                ancestry: character.ancestry,
                                eyeColour: character.eyeColour,
                                hairColour: character.hairColour,
                                actor: character.actor,
                                uniqueID: "harrypotter",
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
  );
}

export default Harrypotter;
