import { useState } from 'react';
import { styled } from 'styled-components';
import Category from './Category';

const StyledDiv = styled.div``;

const StyledInput = styled.input`
    padding: 10px 60px;
    font-size: 1rem;
    max-width: 300px;
`;

const StyledButton = styled.button`
    padding: 6px 60px;
    font-size: 20px;
    margin-left: 10px;
    max-width: 200px;
    background-color: #0B0B3B;
    color: white;
    border: 1px solid black;
    border-radius: 20px;
`;

interface SearchBarProps {
    onSearch: (text: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [filterText, setFilterText] = useState('');

    return (
        <StyledDiv>
            <StyledInput
                value={filterText}
                onChange={(e) => {
                    setFilterText(e.target.value);
                    onSearch(e.target.value);
                }}
            />
            <StyledButton
                onClick={() => {
                    setFilterText('');
                    onSearch('');
                }}
            >
                검색
            </StyledButton>
            <Category />
        </StyledDiv>
    );
}
