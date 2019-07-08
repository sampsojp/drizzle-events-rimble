import React from "react";
import { generateStore } from "drizzle";
import drizzleOptions from "../drizzleOptions";
import { toast } from "react-toastify";
import { ToastMessage } from "rimble-ui";

const contractEventNotifier = store => next => action => {
  const actionTypeSend = "TX_BROADCASTED";
  const actionTypeSuccess = "TX_SUCCESSFUL";
  const actionTypeError = "TX_ERROR";

  if (
    action.type === actionTypeSend ||
    action.type === actionTypeSuccess ||
    action.type === actionTypeError
  ) {
    let displayMessage;
    let displaySecondaryMessage;
    let toastMessageVariant;

    if (action.type === actionTypeSend) {
      toastMessageVariant = "processing";
      displayMessage = "Transaction pending...";
      displaySecondaryMessage = "This might take a few minutes";
    }
    if (action.type === actionTypeSuccess) {
      toastMessageVariant = "success";
      displayMessage = "Transaction confirmed";
      displaySecondaryMessage = "Thanks for using our dapp";
    }
    if (action.type === actionTypeError) {
      toastMessageVariant = "failure";
      displayMessage = "Transaction failed";
      displaySecondaryMessage = "Better luck next time";
    }

    const options = {
      closeButton: false,
      position: toast.POSITION.TOP_CENTER
    };

    const display = (
      <ToastMessage
        my={3}
        variant={toastMessageVariant}
        message={displayMessage}
        secondaryMessage={displaySecondaryMessage}
      />
    );

    toast(display, options);

    // toast.onChange( numberOfToastDisplayed => {
    //   toast.dismiss();
    // });
  }

  return next(action);
};

const appMiddlewares = [contractEventNotifier];

const store = generateStore({
  drizzleOptions,
  appMiddlewares,
  disableReduxDevTools: false // enable ReduxDevTools!
});

// Use the store with DrizzleProvider
export default store;
