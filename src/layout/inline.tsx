import styled from "@emotion/styled";
import { space, width, fontSize, color, flex } from "styled-system";

// Add styled-system functions to your component
const Inline = styled.div(
	{ display: "inline-block" },
	flex,
	space,
	width,
	fontSize,
	color,
);

export default Inline;
