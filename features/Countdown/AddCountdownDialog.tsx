import React, { useState } from 'react';
import { Portal, Dialog, TextInput, Button } from 'react-native-paper';

import { Countdown } from './types';

interface IAddCountdownDialog {
  onAdd: (item: Countdown) => void;
  onCancel: () => void;
  showDialog: boolean;
}

export const AddCountdownDialog = ({
  onAdd,
  onCancel,
  showDialog,
}: IAddCountdownDialog) => {
  const [countdown, setCountown] = useState({ name: '' });

  const onClose = () => {
    if (onCancel) onCancel();
    setCountown({ name: '' });
  };

  const onDone = () => {
    if (onAdd) onAdd(countdown);
    setCountown({ name: '' });
  };

  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={onClose}>
        <Dialog.Title>Add a Countdown</Dialog.Title>
        <Dialog.Content>
          <TextInput
            value={countdown.name}
            onChangeText={text => setCountown({ name: text })}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button disabled={countdown.name.length === 0} onPress={onDone}>
            Add
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
