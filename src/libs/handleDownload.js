"use client"

export default async function handleDownload(svg, isFree, filename, filter, type){
	
	const reqUser = await fetch(`/api/icons/download`)
	const res = await reqUser?.json()
	
	// Check If Svg is Free or If they have Subscriptions
	
	if (res.isSubscriber || isFree){
		
		const modSvg = svg.replace('<svg', `<svg style="fill:${filter.color}"`)

		switch (type) {
			case "svg":
				const blob = new Blob([modSvg], { type: 'image/svg+xml' });
				const url = URL.createObjectURL(blob);

				const a = document.createElement('a');
				a.href = url;
				a.download = filename + ".svg" || 'icon.svg';
				document.body.appendChild(a);
				a.click();

				document.body.removeChild(a);
				URL.revokeObjectURL(url);
				break
			case "png":
				const canvas = document.createElement('canvas');
				const context = canvas.getContext('2d');

				const img = new Image();
				img.src = 'data:image/svg+xml;base64,' + btoa(modSvg);

				img.onload = () => {
					canvas.width = img.width;
					canvas.height = img.height;
					context.drawImage(img, 0, 0);

					canvas.toBlob((pngBlob) => {
						const pngUrl = URL.createObjectURL(pngBlob);

						const pngLink = document.createElement('a');
						pngLink.href = pngUrl;
						pngLink.download = filename + '.png' || 'icon.png';
						document.body.appendChild(pngLink);
						pngLink.click();

						document.body.removeChild(pngLink);
						URL.revokeObjectURL(pngUrl);
					}, 'image/png');
				};
				break;

			default:
				alert("Unsupported Format, Please Contact us")
		}
		
	} else {
		alert("Please Purchase Plan, You are not allowed to download")
	}
	
	
}
