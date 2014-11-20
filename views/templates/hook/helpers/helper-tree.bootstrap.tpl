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

<input type="button" id="category-tree-select-all-{$categories_tree_id|escape:'html':'UTF-8'}" value="{l s='Select all' mod='froggypricenegociator'}" class="btn btn-default" />
<input type="button" id="category-tree-unselect-all-{$categories_tree_id|escape:'html':'UTF-8'}" value="{l s='Unselect all' mod='froggypricenegociator'}" class="btn btn-default" />
<br>
{$categories_tree}

<script>
    $('#category-tree-select-all-{$categories_tree_id|escape:'html':'UTF-8'}').click(function() {
       $('.categories-tree-checkbox-{$categories_tree_id|escape:'html':'UTF-8'}').prop('checked', 'checked');
	});
	$('#category-tree-unselect-all-{$categories_tree_id|escape:'html':'UTF-8'}').click(function() {
		$('.categories-tree-checkbox-{$categories_tree_id|escape:'html':'UTF-8'}').prop('checked', '');
	});
</script>

<style>
    .froggy-categories-tree li { list-style-type: none }
</style>