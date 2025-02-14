<?php
/*
Plugin Name: Internet Connection Check
Description: A plugin that checks if the user's device is connected to the internet, and shows a message or reloads the page accordingly.
Version: 1.4
Author: Richmond
*/

// Enqueue the JavaScript file
function icc_enqueue_scripts() {
    wp_enqueue_script( 'icc-connection-check', plugin_dir_url( __FILE__ ) . 'connection-check.js', array(), '1.3', true );
}

add_action( 'wp_enqueue_scripts', 'icc_enqueue_scripts' );