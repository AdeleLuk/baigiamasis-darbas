import styled from 'styled-components';

const StyledDiv = styled.div`
       display: flex;
       justify-content: center;
    > div{

        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid black;
        border-radius: 10px;
    }
`;

const Question = ({ data }) => {
    return ( 
        <StyledDiv>
            <div>
                <h1>{data.questionTitle}</h1>
                <p>{data.questionBody}</p>
                <p>{data.timestamp}</p>
            </div>
        </StyledDiv>
     );
}
 
export default Question;