/**
 * 2013-2014 Froggy Commerce
 *
 * NOTICE OF LICENSE
 *
 * You should have received a licence with this module.
 * If you didn't buy this module on Froggy-Commerce.com, ThemeForest.net
 * or Addons.PrestaShop.com, please contact us immediately : contact@froggy-commerce.com
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to benefit the updates
 * for newer PrestaShop versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author Froggy Commerce <contact@froggy-commerce.com>
 *  @copyright  2013-2014 Froggy Commerce
 */

$(document).ready(function() {

    // When document is ready, if merchant click on link price tab, we add the price negociator fields
    $('#link-Prices').click(function() {

        if ($('#froggypricenegociator-option').length == 0)
        {
            $('#tr_unit_price').parent().parent().after(fc_pn_negociator_options);

            // Init display and binding
            setTimeout(function() {

                // Init display
                var fields_to_watch = new Array(
                    '#priceTE',
                    '#priceTI',
                    '#froggypricenegociator-price-min',
                    '#froggypricenegociator-reduction-percent-max'
                );
                froggyPriceNegociatorInit(false, fields_to_watch);

            }, 500);
        }

    });

    // When document is ready, if merchant click on combinations tab, we add the price negociator fields
    $('#link-Combinations').click(function() { froggyPriceNegociatorInitCombination(); });
	function froggyPriceNegociatorInitCombination()
	{
        if ($('#froggypricenegociator-combination-option').length == 0)
        {
            var tmp = fc_pn_negociator_options.replace(/id="froggypricenegociator-/g, 'id="froggypricenegociator-combination-');
            $('#tr_unit_impact').parent().parent().after(tmp);
            $('#froggypricenegociator-combination-option-label').text(fc_pn_negociator_label_product_attribute);

            // Init display and binding
            setTimeout(function() {


                // Init
                var fields_to_watch = new Array(
                    '#attribute_price_impact',
                    '#attribute_price',
                    '#attribute_priceTI',
                    '#froggypricenegociator-combination-price-min',
                    '#froggypricenegociator-combination-reduction-percent-max'
                );
                froggyPriceNegociatorInit(true, fields_to_watch);


                // Load configuration combination when an edit button is clicked
                froggyPriceNegociatorLoadConfigurationCombination(0);
                $('.edit').click(function() {
                    var id_product_attribute = froggyPriceNegociatorGetParamsFromUrl($(this).attr('href'), 'id_product_attribute');
                    froggyPriceNegociatorLoadConfigurationCombination(id_product_attribute);
                });
                $('#desc-product-newCombination').click(function() {
                    froggyPriceNegociatorLoadConfigurationCombination(0);
                });


            }, 500);
        }
    }

});