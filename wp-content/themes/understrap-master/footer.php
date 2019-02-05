<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
?>
<!-- USPS -->
<div class="container">
	<div class="usps">
		<div class="row">
			<div class="col-lg">
				<div class="icon icon-leaves"></div>
				<span class="usp-head">Duurzaamheid</span>
				<span class="line">Top of mind, we streven naar het hoogst haalbare</span>
			</div>
			<div class="col-lg">
				<div class="icon icon-unicorn"></div>
				<span class="usp-head">Uniek in vorm</span>
				<span class="line">De samenstelling van product en sfeer is uniek</span>
			</div>
			<div class="col-lg">
				<div class="icon icon-truck"></div>
				<span class="usp-head">Goede bezorgopties</span>
				<span class="line">Voor 15.00 besteld, morgen in huis</span>
			</div>
		</div>
	</div>
</div>
<!-- Footer content -->
	
<div class="footer-content">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="footermenu">
					<h3>klantenservice</h3>
					<?php wp_nav_menu(); ?>
				</div>
				<div class="paymenticons">
					<div class="pay icon-ideal"></div>
					<div class="pay icon-visa"></div>
					<div class="pay icon-paypal"></div>
					<div class="pay icon-mastercard"></div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="footermenu middlefooter">
					<h3>webshop</h3>
					<?php 
					$orderby = 'name';
					$order = 'asc';
					$hide_empty = false ;
					$cat_args = array(
					    'orderby'    => $orderby,
					    'order'      => $order,
					    'hide_empty' => $hide_empty,
					);
					 
					$product_categories = get_terms( 'product_cat', $cat_args );
					 
					if( !empty($product_categories) ){
					    echo '
					 
					<ul>';
					    foreach ($product_categories as $key => $category) {
					        echo '
					 
					<li>';
					        echo '<a href="'.get_term_link($category).'" >';
					        echo $category->name;
					        echo '</a>';
					        echo '</li>';
					    }
					    echo '</ul>
					 
					 
					';
						} ?>
				</div>
			</div>

			<div class="col-md-4">
				<div class="subscription footermenu">
					<h3>Blijf op de hoogte</h3>
					<?php echo do_shortcode("[mc4wp_form id='58']"); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="bottom-footer">
	<div class="container">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<div class="footer-logo">
					<img src="<?php echo get_theme_file_uri()."/src/images/logowhite.png" ;?>"/>
				</div>
				<span>Zaailand 111-113</span>
				<span>8911BL Leeuwarden</span>
				<span class="contactrules"><a href="mailto:info@hardwerkfogeltje.nl">info@hardwerkfogeltje.nl</a></span>
				<!-- <span><a href="tel:+31655735588">+31 6 55 73 55 88</a></span>
				<span><a href="tel:+31650678756">+31 6 50 67 87 56</a></span> -->
				<div class="social-footer">
					<div class="icons">
						<a href="https://www.instagram.com/hardwerkfogeltje/?hl=nl"><span class="icon-instagram"></span></a>
						<a href="https://www.facebook.com/Hardwerk-Fogeltje-496603207051037/"><span class="icon-facebook"></span></a>
					</div>
				</div>
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
</div>

</footer><!-- #colophon -->

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>

