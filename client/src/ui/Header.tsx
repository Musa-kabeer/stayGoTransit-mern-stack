import styled from 'styled-components';

interface IHeader {
     children: React.ReactNode;
}

const StyledHeader = styled.h1`
     font-size: 25px;
     font-weight: 500;
`;

const Header: React.FC<IHeader> = ({ children }) => {
     return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
