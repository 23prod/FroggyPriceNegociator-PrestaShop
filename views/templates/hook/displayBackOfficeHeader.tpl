{*
* 2010 - 2014 Sellermania / Froggy Commerce / 23Prod SARL
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to team@froggy-commerce.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade your module to newer
* versions in the future.
*
*  @author Fabien Serny - Froggy Commerce <team@froggy-commerce.com>
*  @copyright	2010-2014 Sellermania / Froggy Commerce / 23Prod SARL
*  @version		1.0
*  @license		http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*}

<script>
    var fc_pn_is_product_blacklisted = '{$froggypricenegociator.is_product_blacklisted}';
    var fc_pn_enable_general_option = '{$froggypricenegociator.FC_PN_ENABLE_GENERAL_OPTION}';
    var fc_pn_general_reduction = '{$froggypricenegociator.FC_PN_GENERAL_REDUCTION}'
    var fc_pn_type = '{$froggypricenegociator.FC_PN_TYPE}'
    var fc_pn_currency_sign = '{$froggypricenegociator.currency->sign}';
</script>
{if $froggypricenegociator.ps_version eq '1.6'}
    {include file="{$froggypricenegociator.path_template_dir}/displayBackOfficeHeader-html-1.6.tpl"}
{else}
    {include file="{$froggypricenegociator.path_template_dir}/displayBackOfficeHeader-html-1.4-1.5.tpl"}
{/if}
<script type="text/javascript" src="{$froggypricenegociator.module_dir}views/js/displayBackOfficeHeader-{$froggypricenegociator.ps_version}.js"></script>
<script type="text/javascript" src="{$froggypricenegociator.module_dir}views/js/displayBackOfficeHeader-common.js"></script>
<link type="text/css" rel="stylesheet" href="{$froggypricenegociator.module_dir}views/css/displayBackOfficeHeader-{$froggypricenegociator.ps_version}.css" />