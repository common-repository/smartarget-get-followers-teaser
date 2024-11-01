function init_instagram_follow (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_instagram_follow(hash);
}

function insertJs_instagram_follow (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_instagram_follow`;
	document.head.appendChild(script);
}

init_instagram_follow(smartarget_instagram_follow_params.hash);
