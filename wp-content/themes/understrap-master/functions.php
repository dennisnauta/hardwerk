<?php
/**
 * Understrap functions and definitions
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$understrap_includes = array(
	'/theme-settings.php',                  // Initialize theme default settings.
	'/setup.php',                           // Theme setup and custom theme supports.
	'/widgets.php',                         // Register widget area.
	'/enqueue.php',                         // Enqueue scripts and styles.
	'/template-tags.php',                   // Custom template tags for this theme.
	'/pagination.php',                      // Custom pagination for this theme.
	'/hooks.php',                           // Custom hooks.
	'/extras.php',                          // Custom functions that act independently of the theme templates.
	'/customizer.php',                      // Customizer additions.
	'/custom-comments.php',                 // Custom Comments file.
	'/jetpack.php',                         // Load Jetpack compatibility file.
	'/class-wp-bootstrap-navwalker.php',    // Load custom WordPress nav walker.
	'/woocommerce.php',                     // Load WooCommerce functions.
	'/editor.php',                          // Load Editor functions.
);

foreach ( $understrap_includes as $file ) {
	$filepath = locate_template( '/inc' . $file );
	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	require_once $filepath;
}
show_admin_bar( false );

/**
 * Remove sale banners on category and pdp page
 */ 
remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );

/**
 * Remove product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );
 
function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );      	// Remove the description tab
    unset( $tabs['reviews'] ); 			// Remove the reviews tab
    unset( $tabs['additional_information'] );  	// Remove the additional information tab

    return $tabs;
}

//Reposition WooCommerce breadcrumb 
function woocommerce_remove_breadcrumb(){
remove_action( 
    'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
}
add_action(
    'woocommerce_before_main_content', 'woocommerce_remove_breadcrumb'
);

function woocommerce_custom_breadcrumb(){
    woocommerce_breadcrumb();
}

add_action( 'woo_custom_breadcrumb', 'woocommerce_custom_breadcrumb' );


// change price position

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 25 );

/* Remove product meta */
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

// Insert extra product info
function dennis_add_custom_fields()
{
	echo "<span class='spec-header'>Specificaties</span>";
	global $product;

		$customAttributes = array("Kleur", "Breedte", "Hoogte", "Staat");
		foreach ($customAttributes as $customAttribute) {
			echo "<div class='spec'>".$customAttribute.": ". $product->get_attribute( $customAttribute, true)."</div>";
		};
}
add_action( 'woocommerce_single_product_summary', 'dennis_add_custom_fields', 21 );

// Add header to product page
add_action( 'woocommerce_before_single_product', 'dennis_custom_action', 1 );
 
function dennis_custom_action() {
	$marble_head = get_template_directory_uri() . '/src/images/marmerhead.jpg';
;?>
			</div>
		</div>
	</div>
</main>
<header class="woocommerce-products-header">
	<div class="container-fluid">
		<div class="row">	
			<div class="marblehead" style="background-image:url(<?php echo $marble_head ;?>);">
			</div>
		</div>
	</div>
</header>
<div class="container" id="content" tabindex="-1"><div class="row">
	<div class="col-md content-area" id="primary">
		<main class="site-main" id="main">

<?php 
}