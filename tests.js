if ( window.location.href.includes( '#WPORG_TEST' ) ) {
	window.addEventListener( 'load', () => { setTimeout( () => { window.close(); }, 5000 ); } );
}

if ( location.pathname === '/' ) {
	const btn = document.createElement( 'button' );
	btn.textContent = 'Open all types of pages!';
	btn.className = 'wporg_test';document.querySelector( '.search-form' ).prepend( btn );
	btn.addEventListener( 'click', () => {
		const links = [
			'stats',
			'consistency',
			'locale/ro',
			'locale/ro/default/wp',
			'locale/ro/default/wp-plugins',
			'locale/ro/default/wp-themes',
			'locale/ro/default/wp-plugins/health-check',
			'locale/ro/default/wp-themes/twentytwentyone',
			'locale/ro/default/stats/plugins',
			'locale/ro/default/stats/themes',
			'locale/ro/default/glossary',
			'projects',
			'projects/wp',
			'projects/meta',
			'projects/wp/dev',
			'projects/meta/rosetta',
			'projects/wp-plugins/health-check',
			'projects/wp-themes/twentytwentyone',
			'projects/wp/dev/ro/default',
			'projects/wp-plugins/health-check/dev/ro/default',
			'projects/wp-themes/twentytwentyone/ro/default',
			'projects/wp/dev/ro/default/glossary',
		];
		links.forEach( ( link ) => { window.open( `https://translate.wordpress.org/${link}/#WPORG_TEST`, '_blank' ); } );
	});
}
