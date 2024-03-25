import styled from 'styled-components';
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import Question from "../UI/Question";

const StyledSection = styled.section`
    > h1{
        text-align: center;
    }

    > div{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

const Forum = () => {

    const { questions } = useContext(QuestionsContext);

    return ( 
        <StyledSection>
            <h1>Forum</h1>
            <div>
                 {
                    questions.map(question => 
                        <Question
                           key={question.id}
                           data={question}
                        />
                     )
                 }
            </div>
        </StyledSection>
     );
}
 
export default Forum;