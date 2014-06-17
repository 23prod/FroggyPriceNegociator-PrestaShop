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

	$('#FC_PN_ENABLE_GENERAL_OPTION').click(function() {
		froggyPriceNegociatorConfigurationFormStatus();
	});

	froggyPriceNegociatorConfigurationFormStatus();

	$('#open-fancy').click(function(e) {
		e.preventDefault();

		$.fancybox({
			content: '<h2 class="title-modal">'+$('#open-fancy').data('text')+'</h2>',
			autoDimensions: false
		});
	});

	$('#Froggy-price-negociator-admin-tab').responsiveTabs({
		startCollapsed: 'accordion'
	});

});

function froggyPriceNegociatorConfigurationFormStatus()
{
	if ($('#FC_PN_ENABLE_GENERAL_OPTION').is(':checked'))
	{
		$('#fc-pn-type-block').hide();
		$('#fc-pn-general-reduction-block').fadeIn();
	}
	else
	{
		$('#fc-pn-general-reduction-block').hide();
		$('#fc-pn-type-block').fadeIn();
    }
}