<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<link href="https://file.myfontastic.com/euwGyozP2G2GniNPQk9RcF/icons.css" rel="stylesheet">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="site" id="page">

	<!-- ******************* The Navbar Area ******************* -->
	<div id="wrapper-navbar" itemscope itemtype="http://schema.org/WebSite">

	<div class="top-header">
		<div class="container">
			<div class="row">
				<div class="col-10 offset-lg-4 col-lg-4">
					<ul>
						<li>Vintage</li>
						<li>-</li>
						<li>Lifestyle</li>
						<li>-</li>
						<li>Vinyl</li>
					</ul>
				</div>
				<div class="col-2 col-lg-4">
					<div class="right-menu">
						<!-- <div class="search">
							<a id="showbox" href="#"><div class="icon-search"></div></a>
						</div> -->
						<?php 

							global $woocommerce;
							$carturl = wc_get_cart_url();
							$cartcount = $woocommerce->cart->cart_contents_count; 

						?>

						
						<a href="'/winkelmand'"><div class="icon-cart"><span class="cart-count"><?php if ($cartcount > 0) { echo $cartcount; } ?></span></div></a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- SEARCHBOX -->
	<div id="searchbox" style="display:none;">
		<?php get_search_form() ;?>
	</div>
	
	<a class="skip-link sr-only sr-only-focusable" href="#content"><?php esc_html_e( 'Skip to content', 'understrap' ); ?></a>

	<nav class="navbar navbar-expand-md">
		<div class="sticky-header">
			<?php if ( 'container' == $container ) : ?>
				<div class="container-fluid" >
			<?php endif; ?>

					<!-- Your site title as branding in the menu -->
		
				<div class="row">
					<div class="col-lg">
						<div class="logo">
							<a href="<?php echo get_home_url(); ?>"><div class="icon-logo-black"></div></a>
						</div>
					</div>
				</div>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'understrap' ); ?>">
					<div class="mob-menu icon-menu"><span>Menu</span></div>
				</button>

				<!-- The WordPress Menu goes here -->
				<?php wp_nav_menu(
					array(
						'theme_location'  => 'primary',
						'container_class' => 'collapse navbar-collapse',
						'container_id'    => 'navbarNavDropdown',
						'menu_class'      => 'navbar-nav d-flex justify-content-center',
						'fallback_cb'     => '',
						'menu_id'         => 'main-menu',
						'depth'           => 2,
						'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
					)
				); ?>
			<?php if ( 'container' == $container ) : ?>
			</div><!-- .container -->
			<?php endif; ?>
		
		</div><!--.sticky-header -->
	
	</nav><!-- .site-navigation -->

	</div><!-- #wrapper-navbar end -->

<!-- SEARCHBOX -->
<!-- <script>
var $j = jQuery.noConflict();

	$j("#showbox").click(function(){
  		$j("#searchbox").fadeToggle();
	});

</script>
 -->
<!-- 
<script>

	jQuery(window).scroll(function(){
  	var sticky = jQuery('.sticky-header'),
      scroll = jQuery(window).scrollTop();

 	if (scroll >= 46) sticky.addClass('fixed-top');
  	else sticky.removeClass('fixed-top');
	});
	</script> -->
