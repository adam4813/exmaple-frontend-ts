import styled from "@emotion/styled";
import {
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
} from "styled-system";

import Box from "./box";

const Row = styled(Box)(
	{ display: "flex" },
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
);

export default Row;
