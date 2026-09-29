/**
 * Client Script: Clear Subcategory on Category Change
 * Table: incident | Type: onChange | Field: category
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    g_form.clearValue('subcategory');
}
