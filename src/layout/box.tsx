import styled from "@emotion/styled";
import {
	space,
	width,
	fontSize,
	color,
	flex,
	FlexProps,
	SizeProps,
	WidthProps,
	ColorProps,
} from "styled-system";

type BoxType = FlexProps & SizeProps & WidthProps & ColorProps;

const Box = styled("div")<any>(flex, space, width, fontSize, color);

export default Box;
