import { useIntl } from "react-intl";

const useFormatMessage = function(messageId) {
  return useIntl().formatMessage({ id: messageId });
};
const useFormatHtmlMessage = function(messageId) {
  return useIntl().formatHTMLMessage({ id: messageId });
};

export const i18N = {
  t: useFormatMessage,
  html: useFormatHtmlMessage
};
