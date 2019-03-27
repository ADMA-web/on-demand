/* Some extra js for the Webcast Cloud platform */

// auto-execute jQuery load
(function() {
    'use strict';
    // Load the script
    const script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        const $ = window.jQuery;
        console.log('hello jQuery');
        $( document ).ready( main );
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

function main() {
	if( $( '#logoutForm' ).length === 0 ) { spawnLoginBtn(); } // create a login button if user is not logged in
}

function spawnLoginBtn() {
	const nav = $( '.nav-main' );
	const navList = $( '.nav-main .nav-main-list' )

	const loginBtn = `<a id="loginBtn" class="button button--cta has-background-red" href="https://www.adma.com.au/user/login">Login via ADMA</a>`;
	if( navList.length === 0 ) { nav.append( `<ul class="nav-main-list"><li>${ loginBtn }</li></ul>` ); }
	else { navList.append( `<li>${ loginBtn }</li>` ); }
}