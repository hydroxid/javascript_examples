/**
 * Vytvoření objektu selectForm
 * Zobrazování a skrývání bloku s id="elementToShow" na základě hodnoty v selectu s name="input_select"
 */
selectForm = {

    /** 
     * Inicializace handleru
     */
    initSelectForm: function () {
        $(document).ready(function()
        {
            // Úvodní nastavení zobrazení dle hodnoty selectu
            selectForm.selectHandler();

            // Přidání handleru pro změnu selectu
            $('select[name=input_select]').on('change', selectForm.selectHandler);
        });
    },

    /**
     * Handler, který provádí skrytí a zobrazení elementu id="elementToShow"
     */
    selectHandler: function (event)
    {
        var selectedValue = $('select[name=input_select]').val();
        var elementToShow = $('#elementToShow');

        // Zobrazit blok pouze pokud je vybrána Plzeň
        if (selectedValue === 'plzen') {
            elementToShow.show();
        } else {
            elementToShow.hide();
        }
    }
};
