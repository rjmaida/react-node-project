import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationList from "./components/WeatherLocation/LocationList";
import ForecastExtended from "./components/WeatherLocation/ForecastExtended";

const theme = createMuiTheme();

const cities = [
  "Mendoza,ar",
  "Bogotá,col",
  "Buenos Aires,ar",
  "Madrid,es",
  "Ciudad de México,mx"
];

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = { city: "Nueva Ciudad" };
  }

  handleSelectedLocation = city => {
    this.setState({city});
  };

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar position="static" title="Weather App">
                <Toolbar>
                  <IconButton
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="Menu"
                  />
                  <Typography
                    variant="title"
                    color="inherit"
                    className={styles.flex}
                  >
                    Weather App
                  </Typography>
                </Toolbar>
              </AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                  <ForecastExtended city={city} />
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
