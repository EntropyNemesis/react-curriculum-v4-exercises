import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  function validateName() {
    return name.trim() !== '';
  }

  function getNameError() {
    if (touched.name && !validateName()) return 'Snack name is required.';
    return null;
  }

  function validateRating() {
    return rating !== '';
  }

  function getRatingError() {
    if (touched.rating && !validateRating()) return 'Please select a rating.';
    return null;
  }

  useEffect(() => {
    setTouched({ name: false, rating: false });

    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();
    //const formData = new FormData(e.target);
    //const name = formData.get('name');
    //const rating = formData.get('rating');

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      //e.target.reset();
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
          //disabled={!validateName() || !validateRating()}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

/* onFocus doesn't need any info from event because it doesn't read event.target.value or 
other event properties like onChange does.

Also removed disabled button property because this didn't fully meet the pre-submission 
requirements like turning all untouched fields to touched in order to prevent blank form
submission*/
