var paths = [
	{
		from: './app/source/images/**/*',
		to: './app/public/images'
	}, {
		from: './app/source/fonts/**/*',
		to: './app/public/fonts'
	}, {
		from: './app/source/js/**/*',
		to: './app/public/js'
	}, {
		from: './app/source/plugins/**/*',
		to: './app/public/plugins'
	}
];


var paths = [
	{ // mark_base
		from: 'M249.653,132.575c-5.624-1.788-17.369-10.077-22.494-7.151c-10.498,5.991-15.167,35.846-10.818,47.124c1.849,4.796,11.964,10.206,16.862,11.763c4.898,1.559,16.28,2.983,20.56,0.137c10.063-6.695,23.494-33.766,18.384-44.719C269.653,134.38,255.277,134.363,249.653,132.575z',
		to: 'M115.652,0 0,0 19.449,236.11 115.652,266 211.855,236.11 231.305,0'
	},{ // mark_D
		from: 'M269.129,156.772c-5.046,2.146-18.054,3.877-21.931,0c-6.883-6.883-6.883-32.054,0-38.937c3.877-3.877,16.892-2.161,21.931,0c7.329,3.143,8.246,12.275,8.246,19.496C277.375,144.587,276.418,153.674,269.129,156.772zM259.314,128.82C251.248,134.073,251.083,123.832,259.314,128.82C261.382,130.074,257.634,130.381,259.314,128.82C261.034,127.224,258.06,131.475,259.314,128.82C260.568,126.167,259.314,132.069,259.314,128.82C259.314,124.397,261.786,132.335,259.314,128.82C256.835,125.294,262.157,126.971,259.314,128.82z',
		to: 'M149.644,198H70.226V57h79.418c19.904,20.919,29.858,44.452,29.858,70.598C179.502,153.876,169.548,177.345,149.644,198z M103.059,57.882v139.431c7.763-4.052,14.701-8.889,20.814-14.512c6.194-5.817,11.562-13.53,16.106-23.141c4.542-9.608,6.814-20.297,6.814-32.063c0-16.015-4.46-30.396-13.381-43.144C124.409,71.708,114.29,62.851,103.059,57.882z'
	},{ // mark_shadow
		from: 'M277.872,131.579c-2.632-3.743,2.026-19.29-2.439-20.283c-9.15-2.034-26.187,15.007-28.795,24.01c-1.11,3.827,2.594,11.913,4.887,15.174c2.292,3.261,8.648,9.481,12.626,9.732c9.354,0.591,30.348-9.812,32.335-18.975C297.456,136.769,280.502,135.321,277.872,131.579zM254.091,148.675c-3.078-1.019-4.969-9.197-4.07-12.312c2.251-7.793,17-21.723,25.04-20.64c3.69,0.498-5.247,14.506-5.885,18.173C267.627,142.792,262.665,151.51,254.091,148.675z',
		to: 'M115.652,0H0l19.449,236.11L115.652,266l96.203-29.89L231.305,0H115.652z M115.656,246.165l-78.439-23.711L21.535,18l94.121-0.062V246.165z'
	},{ // o1
		from: 'M261.772,150.456c-4.575,2.723-16.669,2.637-21.294,0c-4.549-2.594-4.002-9.591-4.002-14.751c0-4.656-0.721-11.386,4.002-14.159c4.591-2.696,16.726-2.733,21.294,0c4.659,2.787,3.852,9.603,3.852,14.461C265.624,140.739,266.399,147.703,261.772,150.456z M251.982,134.949C257.448,134.859,251.982,139.983,251.982,134.949C251.982,129.638,257.393,135.003,251.982,134.949C246.536,134.896,251.982,129.814,251.982,134.949C251.982,140.36,246.554,135.038,251.982,134.949z',
		to: 'M302.085,198c-13.134,7.816-47.858,7.568-61.137,0c-13.061-7.444-11.49-27.535-11.49-42.351c0-13.368,3.829-26.918,11.49-40.649h61.137c7.371,13.731,11.057,27.57,11.057,41.517C313.142,170.104,315.367,190.096,302.085,198zM270.726,157.25c10.767-11.417-3.75,16.454-3.75,2c0-15.247,15.017,12.452,4.25,1.25c-11.057,11.057,6-16.742,6-2C277.226,174.038,259.669,146.267,270.726,157.25z'
	},{ // o2
		from: 'M288.589,148.59c-7.47,3.591-27.217,3.476-34.769,0c-7.428-3.42-6.534-12.647-6.534-19.453c0-6.14-1.178-15.013,6.534-18.67c7.496-3.555,27.31-3.605,34.769,0c7.604,3.675,6.288,12.663,6.288,19.069C294.876,135.777,296.141,144.959,288.589,148.59z M272.729,124.396C281.652,124.277,272.729,131.035,272.729,124.396C272.729,117.392,281.562,124.466,272.729,124.396C263.836,124.324,272.729,117.624,272.729,124.396C272.729,131.532,263.866,124.512,272.729,124.396z',
		to: 'M394.77,198h-61.137c-7.661-12.935-11.49-27.535-11.49-42.351c0-13.368,3.829-26.918,11.49-40.649h61.137c7.371,13.731,11.057,27.57,11.057,41.517C405.826,170.104,402.141,184.415,394.77,198z M364.093,196.099c10.767-11.417,16.151-24.353,16.151-38.807c0-15.247-5.385-28.472-16.151-39.674c-11.057,11.057-16.585,23.956-16.585,38.698C347.508,171.854,353.036,185.115,364.093,196.099z'
	},{ // d
		from: 'M253.336,165.713c3.062-1.724,18.906,1.815,19.161-1.69c0.877-12.063-10.586-7.413-10.586-7.413s3.171-4.197,3.023-6.188c-0.145-1.96,0.347-4.805-3.901-5.659c-3.752-0.754-14.191-0.375-17.109,1.269c-7.373,4.149-3.277,14.206,4.626,17.222C249.996,163.806,251.987,166.473,253.336,165.713z M255.216,153.959C259.716,151.82,254.888,149.539,255.216,153.959C255.536,158.269,260.162,155.387,255.216,153.959C249.33,152.26,249.683,156.59,255.216,153.959z',
		to: 'M456.226,56v59h-30.232c-7.588,14-11.382,27.607-11.382,41.555c0,13.73,3.794,27.445,11.382,41.445h56.232V56H456.226z M456.226,196.532c-11-12.067-16.585-25.365-16.585-39.891c0-14.163,5.585-27.642,16.585-40.433V196.532z'
	},{ // l
		from: 'M290.788,187.684c-7.47-1.538-9.985-7.572-15.583-12.75c-5.961-5.513-10.532-13.327-16.583-10.584c-6.053,2.744,12.737,5.911,12.833,12.584c0.127,9.006-1.119,3.131-11.084,7.084c-10.083,4-8.311,0.47-14.674,1.665c-2.941,0.553-7.289-1.441-8.832-4.117c-7.262-12.595-7.205-45.526,0-58.154c7.127-12.494,25.774-3.562,40.339-3.562c8.445,0,16.941-2.759,22.5-0.999c5.701,1.761,10.347,16.376,11.167,24.083c1.5,14.083,9.5,17.583,6,28.333c-0.486,1.495-1.443,7.028-2.779,7.028C301.566,178.294,304.955,190.601,290.788,187.684z M292.798,134.88L292.798,134.88L292.798,134.88z',
		to: ''
	},{ // e
		from: 'M290.788,187.684c-7.47-1.538-9.985-7.572-15.583-12.75c-5.961-5.513-10.532-13.327-16.583-10.584c-6.053,2.744,12.737,5.911,12.833,12.584c0.127,9.006-1.119,3.131-11.084,7.084c-10.083,4-8.311,0.47-14.674,1.665c-2.941,0.553-7.289-1.441-8.832-4.117c-7.262-12.595-7.205-45.526,0-58.154c7.127-12.494,25.774-3.562,40.339-3.562c8.445,0,16.941-2.759,22.5-0.999c5.701,1.761,10.347,16.376,11.167,24.083c1.5,14.083,9.5,17.583,6,28.333c-0.486,1.495-1.443,7.028-2.779,7.028C301.566,178.294,304.955,190.601,290.788,187.684z M292.798,134.88L292.798,134.88L292.798,134.88z',
		to: 'M593.698,158h-31.327c0.65,8.312,2.385,15.175,5.203,21.389c2.818,6.216,6.756,11.636,11.815,16.26c6.647-6.431,11.417-14.959,14.309-25.582l18.753,18.861c-1.229,2.818-2.639,6.327-4.228,9.072h-59.728c-7.517-12.718-11.273-27.283-11.273-42.242c0-8.672,0.902-15.861,2.71-21.571c1.806-5.854,4.661-12.249,8.563-19.187h56.259c0.071,1.084,0.108,2.313,0.108,3.686C604.863,131.55,601.141,144.921,593.698,158z M579.39,117.076c-11.057,8.528-16.767,21.645-17.127,39.349C572.957,147.319,578.666,134.203,579.39,117.076z'
	}
]

window.onload = function(){
	var speed = 200;
	var svg = Snap(600,300).remove().attr({viewBox: [0, 0, 600, 300]});

	// gulp.src(paths[key].from).pipe(gulp.dest(paths[key].to));
	Object.keys(paths).forEach(function (key) {
		var path = svg.path(paths[key].from).attr({fill: '#6da500'});
		svg.click(function() {
			path.stop().attr({
				path: paths[key].from,
				fill: '#6da500'
			}).animate({
				path: paths[key].to,
				fill: '#6dccc6'
			}, speed);
		});
	});
	svg.prependTo(container);
};