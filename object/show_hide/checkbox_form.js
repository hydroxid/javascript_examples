/**
 * Vytvoření objektu checkboxForm
 * Objekt slouží k zobrazování a skrývání bloku s id="elementToShow" na základě změny checkboxu s name="input_checkbox"
 */
checkboxForm = {

    /** 
     * Inicializace handleru
     */
    initCheckboxForm: function () {
        $(document).ready(function()
        {
            // Úvodní nastavení zobrazení dle stavu checkboxu
            checkboxForm.checkboxHandler();

            // Změna zobrazení až na základě změny checkboxu
            $('input[name=input_checkbox]').on('change', checkboxForm.checkboxHandler);
        });
    },

    /**
     * Handler, který provádí skrytí a zobrazení elementu id="elementToHide"
     */
    checkboxHandler: function ()
    {
        var elementToShow = $('#elementToShow');
        var checkbox = $('input[name=input_checkbox]');

        if (checkbox.is(":checked"))
        {
            elementToShow.show();
        }
        else
        {
            elementToShow.hide();
        }
    }
};
