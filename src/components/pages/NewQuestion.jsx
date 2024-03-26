import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { ActionTypes } from "../../contexts/QuestionsContext";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import QuestionsContext from "../../contexts/QuestionsContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NewQuestion = () => {

    const { loggedInUser } = useContext(UsersContext);
    const { setQuestions } = useContext(QuestionsContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            questionTitle: "",
            questionBody: ""
        },
        onSubmit: values => {
            const newQuestion = {
                id: uuid(),
                userId: loggedInUser.id,
                questionTitle: values.questionTitle,
                questionBody: values.questionBody
            }
            setQuestions({
                type: ActionTypes.newQuestion,
                data: newQuestion
            });
            navigate('/forum/questions');
        },
        validationSchema: Yup.object({
                questionTitle: Yup.string()
                 .min(10, 'Title must consist of at least 5 symbols')
                 .max(100, 'Title is too long')
                 .required('Please enter question title')
                 .trim(),
                 questionBody: Yup.string()
                  .min(10,'Question must consist of at least 10 symbols')
                  .max(1000, 'Reached character limit')
                  .required('Please type in your question')
                  .trim()
       })
    });
    return ( 
        <div>
            <h1>Post New Question...</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input 
                      type="text"
                      name="questionTitle"
                      id="questionTitle"
                      placeholder="Question title"
                      value={formik.questionTitle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.questionTitle && formik.errors.questionTitle && 
                        <p>{formik.errors.questionTitle}</p>
                    }
                </div>
                <div>
                    <textarea 
                      name="questionBody"
                      id="questionBody"
                      placeholder="Enter your question"
                      value={formik.questionBody}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.questionBody && formik.errors.questionBody && 
                        <p>{formik.errors.questionBody}</p>
                    }
                </div>
                <input type="submit" value="Post" />
            </form>
        </div>
     );
}
 
export default NewQuestion;