<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'woocommerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'go8Y<(5H,Q-TR*L~px2zvyI(*hp!0|Y,G,[^+@*~HwRuk{;XJR{UcHE(X#dnizA|' );
define( 'SECURE_AUTH_KEY',  'j^JAt<F]W[=ujb,g4UmGWs>$!m=R<M9[ue|f&,(+mZ0!tXbQW?/3g/r5jButQ9<+' );
define( 'LOGGED_IN_KEY',    'V?Dm=+g70WHFiqT|y)}ai.]DP~Gi:3?pI~tX269vyULJBj8QMWY=#4u0=g1?)D`C' );
define( 'NONCE_KEY',        'r#0bwu$lr{JkgrBKQ*Jv]y1> u_<Mt*hQq%AiCcQZDN+_gX+lMRc@)[hk`^RV3dj' );
define( 'AUTH_SALT',        'V`osKoSh5@F30,oJC<$c9|++H_!jl/YNe h~IyW:%4qCN>H4Yju?.rx{^eWzEX~&' );
define( 'SECURE_AUTH_SALT', 'Qp-+VbUzZX8i]zatW, G,B(;uAGda3c2w 8t:5 *ia-Nr.[3(k+#6j@`GF]sn44=' );
define( 'LOGGED_IN_SALT',   '(-<X$hB&ryT(m7wU!+NNLv1y3l_~h@rfY=NaCwO|E8ip+So2Mw&wC:vn+eHI^Q?p' );
define( 'NONCE_SALT',       'Ye`7JS>sy*yvvvPDz0$uj+<4/9AUtBcn{lfVRV=qh|//1yIXzg3k_cZI=BuV{ppv' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
