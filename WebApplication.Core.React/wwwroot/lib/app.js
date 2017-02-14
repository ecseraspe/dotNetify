﻿$ = jQuery = require( "jquery" );
require( "bootstrap" );
require( "signalr" );
Path = require( "pathjs" );
React = require( "react" );
ReactDOM = require( "react-dom" );

// Material-UI components.
MuiThemeProvider = require( "material-ui/styles/MuiThemeProvider" ).default;
AutoComplete = require( "material-ui/AutoComplete" ).default;
Checkbox = require( "material-ui/Checkbox" ).default;
Chip = require("material-ui/Chip").default;
Dialog = require("material-ui/Dialog").default;
IconButton = require( "material-ui/IconButton" ).default;
FlatButton = require( "material-ui/FlatButton" ).default;
MenuItem = require( "material-ui/MenuItem" ).default;
Paper = require("material-ui/Paper").default;
RadioButtonGroup = require( "material-ui/RadioButton" ).RadioButtonGroup;
RadioButton = require("material-ui/RadioButton").RadioButton;
RaisedButton = require( "material-ui/RaisedButton" ).default;
SelectField = require("material-ui/SelectField").default;
Step = require( "material-ui/Stepper" ).Step;
Stepper = require("material-ui/Stepper").Stepper;
StepLabel = require( "material-ui/Stepper" ).StepLabel;
TextField = require( "material-ui/TextField" ).default;
Toggle = require("material-ui/Toggle").default;
Table = require("material-ui/Table").Table;
TableBody = require("material-ui/Table").TableBody;
TableHeader = require("material-ui/Table").TableHeader;
TableHeaderColumn = require("material-ui/Table").TableHeaderColumn;
TableRow = require("material-ui/Table").TableRow;
TableRowColumn = require("material-ui/Table").TableRowColumn;

// Material-UI icons.
IconDelete = require("material-ui/svg-icons/action/delete").default;
IconEdit = require("material-ui/svg-icons/content/create").default;
IconSearch = require("material-ui/svg-icons/action/search").default;

// Used by Material-UI.
injectTapEventPlugin = require( "react-tap-event-plugin" );
injectTapEventPlugin();
