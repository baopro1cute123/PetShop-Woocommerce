<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package woocommerce_theme
 */

?>

<footer id="colophon" class="site-footer" style="margin-top: 40px; margin-bottom: 0px !important;">
    <nav id="site-navigation" class="main-navigation bg-primary">
        <div class="container">
            <div class="row ">

                <div class="col-4 ">
                    <?php if (is_active_sidebar('sidebar-3')) : ?>
                    <aside id="secondary" class="widget-area">
                        <?php dynamic_sidebar('sidebar-3'); ?>
                    </aside>
                    <?php endif; ?>
                </div>
                <div class="col-4 ">

                    <?php if (is_active_sidebar('sidebar-2')) : ?>
                    <aside id="secondary" class="widget-area">
                        <?php dynamic_sidebar('sidebar-2'); ?>
                    </aside>
                    <?php endif; ?>
                </div>
                <div class="col-4 ">

                    <?php if (is_active_sidebar('sidebar-4')) : ?>
                    <aside id="secondary" class="widget-area">
                        <?php dynamic_sidebar('sidebar-4'); ?>
                    </aside>
                    <?php endif; ?>
                </div>
            </div>
        </div>


    </nav><!-- #site-navigation -->
    <div class="container pb-2 pt-2">
        <div class="row d-flex align-items-center">
            <div class="col-12">
                <!-- <p>&copy; <?php bloginfo( 'name' ); ?> <?php echo date('Y') ?> created by <a href="google.com" target="_blank" rel="noopener noreferrer">Trọng Nhân Dev</a></p> -->
                <p class="d-flex justify-content-center align-items-center w-100 text-a">
                    <?php echo get_theme_mod( 'set-copyright' , '© Woocommerce Pet Shop 2024 created by BaoNguyenDuongGia' ); ?>
                </p>


            </div>
        </div>
    </div>
</footer><!-- #colophon -->




<?php wp_footer(); ?>
</body>

</html>