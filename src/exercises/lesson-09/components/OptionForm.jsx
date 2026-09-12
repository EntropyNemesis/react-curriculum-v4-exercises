import { useState, useContext } from 'react';
import { SurveyContext } from '../SurveyContext.jsx';

function OptionForm({ option, index, questionId, canDelete }) {
  const [workingOptionText, setWorkingOptionText] = useState(option);
  const { dispatch } = useContext(SurveyContext);

  const handleOptionSave = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: questionId,
        optionIndex: index,
        newText: workingOptionText,
      },
    });
  };

  const handleOptionDelete = () => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: questionId, optionIndex: index },
    });
  };

  return (
    <form onSubmit={handleOptionSave}>
      <input
        type="text"
        value={workingOptionText}
        onChange={(e) => setWorkingOptionText(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" disabled={!canDelete} onClick={handleOptionDelete}>
        Delete
      </button>
    </form>
  );
}

export default OptionForm;
