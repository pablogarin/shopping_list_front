import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogContainer,
  DialogCard,
  DialogHeader,
  DialogBody,
  DialogActions
} from './styled/Dialog';

function Dialog({ title, toggleVisible, acceptButton, cancelButton, children }) {
  const accept = async () => {
    if (typeof acceptButton === 'function') {
      await acceptButton();
    }
    toggleVisible();
  }

  const cancel = async () => {
    if (typeof cancelButton === 'function') {
      await cancelButton();
    }
    toggleVisible();
  }

  return (
    <DialogContainer>
      <DialogCard>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
        <DialogActions>
          {cancelButton && (<button role="link" onClick={cancel}>Cancelar</button>)}
          <button role="link" onClick={accept}>Aceptar</button>
        </DialogActions>
      </DialogCard>
    </DialogContainer>
  )
}

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  acceptButton: PropTypes.func,
  cancelButton: PropTypes.any
}

export default Dialog

