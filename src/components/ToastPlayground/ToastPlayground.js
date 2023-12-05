import React from 'react';

import Button from '../Button';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <form className={styles.wrapper} onSubmit={event => {
      event.preventDefault();
      addToast(variant, message);
      setMessage('');
      setVariant(VARIANT_OPTIONS[0]);
    }}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
                id="message"
                value={message}
                className={styles.messageInput}
                required
                onChange={event => {
                  setMessage(event.target.value);
                }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option, index) => {
              const id = `variant-${option}`;
              return (
                <label key={index} htmlFor={id}>
                  <input
                      id={id}
                      type="radio"
                      name="variant"
                      required
                      value={option}
                      checked={option === variant}
                      onChange={event => {
                        setVariant(event.target.value)
                      }}
                  />
                  {option}
                </label>
            )})}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
