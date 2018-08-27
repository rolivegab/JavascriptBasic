import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
`;

const App = () => <StyledDiv />;

render(<App />, document.getElementById("root"));
