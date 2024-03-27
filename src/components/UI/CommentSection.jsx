import styled from "styled-components";

const StyledDiv = styled.div`
     
     background-color: white;
     > span{
        margin-left: 100px;
     }
`;

const CommentSection = ({ comment }) => {
    return ( 
        <StyledDiv>
            <span>{comment.text}</span>
            <span>By{comment.commentAuthorId}</span>
        </StyledDiv>
     );
}
 
export default CommentSection;