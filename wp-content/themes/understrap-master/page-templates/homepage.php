<?php
/**
 * Template Name: Homepage Template
 *
 * Template for displaying the homepage.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title"
		content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>
<body>
<?php get_header();
$container = get_theme_mod( 'understrap_container_type' ); ?>
	
<!-- Get header image from homepage page -->
<?php if (has_post_thumbnail( $post->ID ) ): ?>
	<?php 	$bgImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail'); 
			$imageText = get_post(get_post_thumbnail_id())->post_content; ?>
<?php endif; ?>	

<div class="d-none d-lg-block container-fluid">
	<div class="row">	
		<div class="header-bg" style="background-image:url(<?php echo (($bgImage[0]))?>);">
			<h2><?php echo $imageText; ?></h2>
		</div>
	</div>
</div>

<!-- New products -->

<div class="new-products">
	<div class="container">
		<div class="row">
			<div class="box col-md-3">
				<div class="head">
					<h3>Nieuw<br />binnen</h3>
				</div>
			</div>
				<?php require_once('wp-content/themes/understrap-master/inc/newproducts.php') ;?>
			<div class="box col-md-3">
				<div class="buttonbox">
					<?php $new_cat_link = get_term_link(20, 'product_cat'); ?>
					<a class="newbutton" href="<?php echo $new_cat_link; ?>">Shop >></a>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Pay-off -->

<div class="payoff">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2><span>“DUURZAAMHEID, SFEER EN BELEVING.<br /> DAAR STAAN WIJ VOOR!”</span></h2>
			</div>
		</div>
	</div>
</div>

<!-- About us -->

<?php 
	$aboutBg = get_template_directory_uri() . '/src/images/marble_bg1.png';
	$organicBg = get_template_directory_uri() . '/src/images/organic_bg.png';
	$aboutImage = get_template_directory_uri() . '/src/images/aboutimage.jpeg';
	$accesImage = get_template_directory_uri() . '/src/images/ala.jpg';
	$vinylImage = get_template_directory_uri() . '/src/images/vinyl.jpg';
?>

<div class="about-us">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="bg-box" style="background-image:url(<?php echo $aboutBg ;?>);">
					<div class="row">
						<div class="col-md-4">
							<div class="aboutimage">
								<img src="<?php echo $aboutImage ;?>" />
							</div>
						</div>
						<div class="col-md-8">
							<div class="abouttext">
								<h2><?php echo $post->post_title; ?></h2>
								<p><?php echo $post->post_content; ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Organic denim -->

<div class="organic" style="background-image:url(<?php echo $organicBg ;?>);">
	<div class="title">
		<h3>Organic Denim</h3>
		<span class="underline">Instore only</span>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="container">
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-2">
							<div class="icon icon-tube"></div>
							<span>Geen<br />Chemicaliën</span>
						</div>
						<div class="col-md-2">
							<div class="icon icon-respect"></div>
							<span>Sociaal<br />verantwoord</span>
						</div>
						<div class="col-md-2">
							<div class="icon icon-open-magazine"></div>
							<span>Transparantie<br />Productie</span>
						</div>
						<div class="col-md-2">
							<div class="icon icon-recycle-sign"></div>
							<span>Recycling<br />Hergebruik</span>
						</div>
						<div class="col-md-2">
							<div class="icon icon-leaf"></div>
							<span>Natuurlijke<br />producten</span>
						</div>
						<div class="col-md-1"></div>
					</div>	
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="buttonbox">
						<a class="clothbutton" href="<?php echo $new_cat_link; ?>">our brands & more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Accessoires -->

<div class="cat-big">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="bg-box" style="background-image:url(<?php echo $aboutBg ;?>);">
					<div class="row">
						<div class="col-md-6">
							<img class="big-cat-image" src="<?php echo $vinylImage ;?>;">
							
							<div class="buttonbox">
								<a class="catbutton white button" href="<?php echo $new_cat_link; ?>">Shop Vinyl</a>
							</div>
						</div>
						<div class="col-md-6">
							<img class="big-cat-image" src="<?php echo $accesImage ;?>;">
							<div class="buttonbox">
								<a class="catbutton white button" href="<?php echo $new_cat_link; ?>">Shop a La</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?php get_footer(); ?>
</body>
</html>
