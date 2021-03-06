import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinkMui from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "../util/router";
import { useDarkMode } from "../util/theme";

const useStyles = makeStyles((theme) => ({
  sticky: {
    padding: 40,
    backgroundColor: "#F8EADD",
  },
  brand: {
    display: "block",
    height: 42,
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  listItemTextHeader: {
    fontWeight: "bold",
  },
  socialIcon: {
    minWidth: 30,
  },
  legal: {
    marginTop: theme.spacing(3),
    fontSize: "0.875rem",
    opacity: 0.6,
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
}));

function CleanFooter(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      class={classes.sticky}
    >
      <Container>
        <Grid container={true} justifyContent="space-between" spacing={4}>
          <Grid item={true} xs={12} md={4}>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.brand} />
            </Link>

            {props.description && (
              <Box mt={3}>
                <Typography component="p">{props.description}</Typography>
              </Box>
            )}

            <div className={classes.legal}>
              {props.copyright}
              <LinkMui component={Link} to="/legal/terms-of-service">
                Terms
              </LinkMui>
              <LinkMui component={Link} to="/legal/privacy-policy">
                Privacy
              </LinkMui>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Grid container={true} spacing={4}>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Product
                    </Typography>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/pricing"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>Pricing</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/faq"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>FAQ</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Company
                    </Typography>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/about"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>About</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/contact"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>Contact</ListItemText>
                  </ListItem>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://medium.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemText>Blog</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Social
                    </Typography>
                  </ListItem>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://twitter.com/divjoy"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2FGroup.svg?alt=media&token=a007eafc-aeb0-41fc-9e6e-ed88182027a7"
                        alt="Twitter"
                      />
                    </ListItemIcon>
                    <ListItemText>Twitter</ListItemText>
                  </ListItem>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2FVector.svg?alt=media&token=56948248-d3c7-42f7-be6c-a802bcf0c25d"
                        alt="Facebook"
                      />
                    </ListItemIcon>
                    <ListItemText>Facebook</ListItemText>
                  </ListItem>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2FGroup%20(2).svg?alt=media&token=8e079b2c-322a-484c-9a2c-3a0488cc5845"
                        alt="Instagram"
                      />
                    </ListItemIcon>
                    <ListItemText>Instagram</ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default CleanFooter;
