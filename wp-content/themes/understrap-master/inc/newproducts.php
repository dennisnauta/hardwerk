<?php  
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 6,
        'product_cat_id' => 20
    );

    $loop = new WP_Query( $args );

       while ( $loop->have_posts() ) : $loop->the_post();
         global $product; ?>
        <div class="box col-md-3">
            <a href="<?php echo get_permalink() ;?>">
                <div class="product-image">
                    <?php echo woocommerce_get_product_thumbnail() ;?>
                </div>
                <span><?php //echo get_the_title(); ?></span>
                <span class="regular-price"><?php //echo get_woocommerce_currency_symbol() .$product->regular_price; ?></span>
                <span class="sale-price"><?php //echo get_woocommerce_currency_symbol() .$product->sale_price; ?></span>
            </a>
        </div>

 <?php endwhile;

    wp_reset_query();
?>