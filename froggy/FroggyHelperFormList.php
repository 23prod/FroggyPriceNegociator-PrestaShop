<?php
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
 * @author    Froggy Commerce <contact@froggy-commerce.com>
 * @copyright 2013-2014 Froggy Commerce
 * @license   Unauthorized copying of this file, via any medium is strictly prohibited
 */

/*
 * Security
 */
if (!defined('_PS_VERSION_'))
	exit;

class FroggyHelperFormList
{
	private $configuration;
	private $form_url;
	private $default_values;
	private $module;
	private $context;

	public function setConfiguration($configuration)
	{
		$this->configuration = $configuration;
	}

	public function setFormUrl($form_url)
	{
		$this->form_url = $form_url;
	}

	public function setDefaultValues($default_values)
	{
		$this->default_values = $default_values;
	}

	public function setModule($module)
	{
		$this->module = $module;
	}

	public function setContext($context)
	{
		$this->context = $context;
	}

	public function prefillFormFields()
	{
		if (isset($this->configuration['form']))
			foreach ($this->configuration['form'] as $key_section => $sections)
				foreach ($sections['fields'] as $key_field => $field)
					if (!isset($field['prefill']))
						$this->configuration['form'][$key_section]['fields'][$key_field]['value'] = Tools::getValue($field['name'], (isset($this->default_values[$field['name']]) ? $this->default_values[$field['name']] : ''));

		if (isset($this->configuration['list']['data_request']))
			$this->configuration['list']['data'] = Db::getInstance()->executeS($this->configuration['list']['data_request']);
	}

	public function render()
	{
		$assign = array(
			'module_name' => $this->module->name,
			'configuration' => $this->configuration,
			'form_url' => $this->form_url,
		);

		$this->context->smarty->assign('froggyhelper', $assign);
		return $this->module->fcdisplay(dirname(__FILE__).'/../../'.$this->module->name, 'helpers/helper.tpl');
	}
}