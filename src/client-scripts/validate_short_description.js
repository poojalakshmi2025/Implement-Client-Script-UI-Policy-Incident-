/**
 * Client Script: Validate Incident Short Description
 * Table: incident | Type: onSubmit
 */
function onSubmit() {
    var desc = g_form.getValue('short_description').trim();
    if (desc.length < 10) {
        g_form.clearMessages();
        g_form.showFieldMsg('short_description', 'Short description must be at least 10 characters.', 'error');
        return false;
    }
    return true;
}
