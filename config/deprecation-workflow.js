window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: 'silence', matchId: 'ember-router.router' },
    { handler: 'silence', matchId: 'ember-application.injected-container' },
    { handler: 'silence', matchId: 'ember-intl-format-html-message-string-literals-only' }
  ]
};
