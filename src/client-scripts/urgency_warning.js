/**
 * Client Script: Urgency High Warning
 * Table: incident | Type: onChange | Field: urgency
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading) {
        return;
    }
    g_form.hideFieldMsg('urgency');
    if (newValue === '1') { // 1 = High
        g_form.showFieldMsg('urgency', 'High urgency incidents are prioritised. Please provide accurate impact details.', 'info');
    }
}
