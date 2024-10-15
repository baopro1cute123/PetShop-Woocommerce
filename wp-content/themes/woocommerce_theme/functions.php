<?php
/**
 * woocommerce_theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package woocommerce_theme
 */

// xây dựng từ undercortheme

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function woocommerce_theme_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on woocommerce_theme, use a find and replace
		* to change 'woocommerce_theme' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'woocommerce_theme', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'woocommerce_theme' ),
			'footer-menu-1' => esc_html__('Footer Menu', 'woocommerce_theme'), // Footer menu // footer-menu-1 cái nền phải trùng với tên menu đặt trong wp-admin
			'footer-menu-2' => esc_html__('Footer Menu 2', 'woocommerce_theme'), // Footer menu
			'footer-menu-3' => esc_html__('Footer Menu 3', 'woocommerce_theme'), // Footer menu


		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'woocommerce_theme_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'woocommerce_theme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function woocommerce_theme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'woocommerce_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'woocommerce_theme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function woocommerce_theme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'woocommerce_theme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'woocommerce_theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar2', 'woocommerce_theme' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Add widgets here.', 'woocommerce_theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar3', 'woocommerce_theme' ),
			'id'            => 'sidebar-3',
			'description'   => esc_html__( 'Add widgets here.', 'woocommerce_theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar4', 'woocommerce_theme' ),
			'id'            => 'sidebar-4',
			'description'   => esc_html__( 'Add widgets here.', 'woocommerce_theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'woocommerce_theme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function woocommerce_theme_scripts() {
	wp_enqueue_style( 'woocommerce_theme-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'woocommerce_theme-style', 'rtl', 'replace' );
    
	wp_enqueue_script( 'woocommerce_theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
    wp_enqueue_style('bootstrap.css', get_template_directory_uri() . '/css/style.css', array(), '5.0.1', 'all');
	wp_enqueue_style('custom-styles', get_template_directory_uri() . '/css/style.css');
	
	wp_enqueue_style('bootstrap.icon', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css', array(), '1.11.2', 'all');
	wp_enqueue_script('bootstrap.js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', 'jQuery', '1.0.3', true );
	// Enqueue font 
	wp_enqueue_script('font.sansource', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,600&display=swap', array(), '1.0.1', false);
	wp_enqueue_script('font.nunito', 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap', array(), '1.0.2', false);
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'woocommerce_theme_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Show cart contents / total Ajax
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment' );

function woocommerce_header_add_to_cart_fragment( $fragments ) {
	global $woocommerce;

	ob_start();

	?>
<a class="cart-customlocation" href="<?php echo esc_url(wc_get_cart_url()); ?>"
    title="<?php _e('View your shopping cart', 'woothemes'); ?>"><?php echo sprintf(_n('%d item', '%d items', $woocommerce->cart->cart_contents_count, 'woothemes'), $woocommerce->cart->cart_contents_count);?>
    – <?php echo $woocommerce->cart->get_cart_total(); ?></a>
<?php
	$fragments['a.cart-customlocation'] = ob_get_clean();
	return $fragments;
}

// nhúng hàm woocommerce content thành công
add_theme_support( 'woocommerce' );

//Hook : woocommerce_archive_description
add_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description' );

function woocommerce_taxonomy_archive_description() {
	?>
<h3>Welcome to My Shop Page</h3>

<?php
}

//////// Bài Shop Page Woocommerce //////////////////
//Hook: woocommerce_before_shop_loop // thông báo

add_action( 'woocommerce_before_shop_loop', 'notice', 1);

function notice() {
    $day = new DateTime(); // Create the DateTime object
    $day->modify('+7 days'); // Add 7 days to the current date
    ?>
<strong>Tất cả các sản phẩm sẽ được giảm giá đến ngày <?php echo $day->format('d/m/Y'); ?> </strong>
<?php
}




//Hook: woocommerce_after_shop_loop_item_title
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
function woocommerce_template_loop_price() {
	?>
<p><?php the_excerpt(  ); // in ra phần nội dung chi tiết
?></p>

<?php
}

remove_action('woocommerce_single_product_summary','woocommerce_template_single_price',10);
add_action('woocommerce_single_product_summary','woocommerce_template_single_price',1);

//Xử phần sản phẩm có liên quan 
add_filter( 'woocommerce_output_related_products_args', 'jk_related_products_args', 20 );
  function jk_related_products_args( $args ) {
	$args['posts_per_page'] = 3; // 4 related products
	$args['columns'] = 3; // arranged in 2 columns // giới hạng 3 sản phẩm => 3 cột trên 1 hàng
	return $args;
}

// Tùy chỉnh tab sản phẩm
add_filter('woocommerce_product_tabs', 'short_description_custom');

function short_description_custom($tabs) {
    // Remove default tabs
    unset($tabs['description']);
    unset($tabs['additional_information']);
    unset($tabs['reviews']);

    // Add custom "Full Description" tab
    $tabs['description_product'] = array(
        'title'    => __('Mô tả chi tiết', 'your-theme-textdomain'),
        'priority' => 5,
        'callback' => 'woocommerce_description'
    );

    // Add custom "Sản phẩm khuyến mãi" (Discount) tab
    $tabs['discount'] = array(
        'title'    => __('Sản phẩm khuyến mãi', 'your-theme-textdomain'),
        'priority' => 10,
        'callback' => 'woocommerce_discount'
    );

    return $tabs;
}

// Callback for the "Full Description" tab
function woocommerce_description() {
    ?>
<div><?php the_content(); ?></div>
<?php
}

// Callback for the "Sản phẩm khuyến mãi" (Discount) tab
function woocommerce_discount() {
    ?>
<div><?php the_title(); ?> đang được khuyến mãi 100%</div>
<?php
}


//custom checkout

// add_filter( 'woocommerce_checkout_fields' , 'misha_print_all_fields' ); //in các trường dưới dạng print_f

// function misha_print_all_fields( $fields ) {

// 	if( !current_user_can( 'manage_options' ) )
// 		return; // in case your website is live
// 	echo '<pre>';
// 	print_r( $fields ); // wrap results in pre html tag to make it clearer
// 	exit;
// }

 add_filter( 'woocommerce_checkout_fields' , 'remove_company_field' );
 function remove_company_field($data) {
	unset($data["billing"]["billing_company"]);
	return $data;
 }

add_filter( 'woocommerce_checkout_fields', 'bbloomer_add_custom_checkout_field' );

function bbloomer_add_custom_checkout_field( $data ) {
	$data["billing"]["billing_hotline"] =  array(
		'type' => 'text',
		'class' => array( 'form-row-wide' ),
		'label' => 'Hot Line',
		'placeholder' => 'xxx-xxx-xx',
		'required' => false,
		'default' => "0839411698",
	);
	return $data;

}

add_action( 'woocommerce_checkout_process', 'bbloomer_validate_new_checkout_field' );

function bbloomer_validate_new_checkout_field() {
	if ( ! $_POST['billing_hotline'] ) {
		wc_add_notice( 'Please enter your hotline', 'error' ); // thông báo trường hotline bị rỗng
	}
}

// lưu trường hotline vào trong database và trang admin
add_action( 'woocommerce_checkout_update_order_meta', 'custom_checkout_field_update_order_meta' );

function custom_checkout_field_update_order_meta( $order_id ) {
    if ( ! isset( $_POST['billing_hotline'] ) ) return;
    if ( empty( $_POST['billing_hotline'] ) ) return;

    update_post_meta( $order_id, '_billing_hotline', sanitize_text_field( $_POST['billing_hotline'] ) ); //nhận giá trị từ trường hotline
}
//Lưu vào trang quản trị admin Wordpress 

add_action( 'woocommerce_admin_order_data_after_billing_address', 'bbloomer_show_new_checkout_field_order', );

function bbloomer_show_new_checkout_field_order( $order ) {

    echo '<div><strong>Hotline Number:</strong> ' . '</br>'. get_post_meta( $order->get_id(), "_billing_hotline", true ) . '</div>'; //in ra trường hotline trong trang admin-wp
}


//Bài 11: Theme option cho Woocommerce 

add_action( 'customize_register', 'theme_option_customize' );

function theme_option_customize($wp_customize) {
	//Add Section
	$wp_customize->add_section("product-pannels", array(
		"title" => "Product pannel for woocommerce",
		"description" => "This is a product pannel for woocommerce"
	));

	//Add setting
	$wp_customize->add_setting("popular-product-limit", array(
		"type" => "theme_mod",
		"default" => "",
		"sanitize_callback" => "absint"
	));

	//Add Control 
    $wp_customize->add_control("popular-product-limit", array(
		"label" => "Set Limit popular product",
		"description" =>"Please fill in limit popular product",
		"section" => "product-pannels",
		"type" => "number"
	));



	//Add setting
	$wp_customize->add_setting("popular-product-column", array(
		"type" => "theme_mod",
		"default" => "",
		"sanitize_callback" => "absint"
	));

	//Add Control 
    $wp_customize->add_control("popular-product-column", array(
		"label" => "Set column popular product",
		"description" =>"Please fill in column popular product",
		"section" => "product-pannels",
		"type" => "number"
	));


	//SEt theme option for specials offers 
	//Add setting
	$wp_customize->add_setting("special-product-limit", array(
		"type" => "theme_mod",
		"default" => "",
		"sanitize_callback" => "absint"
	));

	//Add Control 
    $wp_customize->add_control("special-product-limit", array(
		"label" => "Set Limit specials product",
		"description" =>"Please fill in limit specials product",
		"section" => "product-pannels",
		"type" => "number"
	));



	//Add setting
	$wp_customize->add_setting("special-product-column", array(
		"type" => "theme_mod",
		"default" => "",
		"sanitize_callback" => "absint"
	));

	//Add Control 
    $wp_customize->add_control("special-product-column", array(
		"label" => "Set column special product",
		"description" =>"Please fill in column special product",
		"section" => "product-pannels",
		"type" => "number"
	));


	
}

?>