/**
 * Client Script: Set Default Contact Type
 * Table: incident | Type: onLoad
 */
function onLoad() {
    if (g_form.isNewRecord() && g_form.getValue('contact_type') === '') {
        g_form.setValue('contact_type', 'self-service');
    }
}
