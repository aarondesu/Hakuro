import { createMuiTheme } from "@material-ui/core";
import { pink, green, indigo, lightBlue } from "@material-ui/core/colors/";

// TODO: Add more stuff
export default createMuiTheme({
  "@global": {
    body: {
      backgroundColor: green
    }
  },
  palette: {
    secondary: indigo
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        flexGrow: 1
      }
    }
  }
});
