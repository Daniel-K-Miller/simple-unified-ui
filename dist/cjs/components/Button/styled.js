"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeButton = exports.MediumButton = exports.SmallButton = void 0;
const Button_1 = require("./Button");
const styled_components_1 = __importDefault(require("styled-components"));
const SmallButton = (0, styled_components_1.default)(Button_1.Button) `
	background: ${(props) => props.bgColor};
	font-size: 1em;
	padding: 0.5em;
	color: white;
	border-radius: 0.25;
`;
exports.SmallButton = SmallButton;
const MediumButton = (0, styled_components_1.default)(Button_1.Button) `
	background: ${(props) => props.bgColor};
	font-size: 1.5em;
	padding: 0.75em;
	color: white;
	border-radius: 0.25;
`;
exports.MediumButton = MediumButton;
const LargeButton = (0, styled_components_1.default)(Button_1.Button) `
	background: ${(props) => props.bgColor};
	font-size: 1.5em;
	padding: 0.75em;
	color: white;
	border-radius: 0.25;
`;
exports.LargeButton = LargeButton;
//# sourceMappingURL=styled.js.map