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
        background-color: #9093ee82;

        .body{
            background-color: white;
            border-radius: 20px;
            padding: 30px 40px;
        }
        > h1{
            background-color: white;
            border-radius: 20px;
            padding: 10px 20px;
        }
    }
`;

const Question = ({ data }) => {
    return ( 
        <StyledDiv>
            <div>
                <h1>{data.questionTitle}</h1>
                <p className='body'>{data.questionBody}</p>
                <p className='timestamp'>{data.timestamp}</p>
            </div>
        </StyledDiv>
     );
}
 
export default Question;