import { useContext, useState } from 'react';
import React from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx';
import OptionForm from './OptionForm.jsx';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // Stephanie Jane has edited functionality here
  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });
    // Hint: Use SET_EDITING_QUESTION action
  };

  const handleCancel = () => {
    dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
  };

  // Stephanie Jane added save functionality here
  const handleSave = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
  };

  // Stephanie Jane added delete functionality here
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
    //console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter new option text:');
    if (optionText && optionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: optionText.trim() },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* Stephanie Jane added Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        <h3>{question.question}</h3>

        <form onSubmit={handleSave}>
          {isEditing && (
            <>
              <TextInputWithLabel
                elementId="question-text"
                value={workingText}
                labelText={question.question}
                onChange={(e) => setWorkingText(e.target.value)}
              />
              <button type="submit">Update</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </>
          )}
        </form>
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>
                <OptionForm
                  option={option}
                  index={index}
                  questionId={question.id}
                  canDelete={question.options.length > 2}
                />
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleAddOption}>
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
}
