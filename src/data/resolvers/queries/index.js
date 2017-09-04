import users from './users';
import channels from './channels';
import brands from './brands';
import integrations from './integrations';
import forms from './forms';
import responseTemplates from './responseTemplates';
import emailTemplates from './emailTemplates';

export default {
  ...users,
  ...channels,
  ...brands,
  ...integrations,
  ...forms,
  ...responseTemplates,
  ...emailTemplates,
};
