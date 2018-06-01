const	express = require('express'),
		port = process.argv[2] || 8080,
		app = express();

app.use('/', express.static('.'));
app.get('/', function(req, res){
	res.redirect('/index.html');;
});

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});

/*
var http = require("http"),
	url = require("url"),
	httpProxy = require('http-proxy'),
	path = require("path"),
	fs = require("fs"),
	port = process.argv[2] || 8080,
////////////////////////////////////////////////////////////////////////////
// Adjust this settings to your needs for proxying the backend requests   //
////////////////////////////////////////////////////////////////////////////
	proxy_cfg = {
		// the prefix you use to call your backend functions via the proxy server
		prefix: "/xfs_odp/sap/opu/odata/sap/ZLCT_HEAD_LINE_SRV/",
		// the host of your backend server
		host: "localhost",
		// port of your backend server
		port: "3000",
		// proxy context, context of the proxy application
		context: "odata/"
	};


var proxy = httpProxy.createProxyServer();

http.createServer(function(request, response) {

	var uri = url.parse(request.url).pathname,
		filename = path.join(process.cwd(), uri);

	if (uri.indexOf(proxy_cfg.prefix) === 0) {
		proxy.on('error', function (err, req, res) {
			//console.log("backend error");
			//console.log(err);
		});
		proxy.on('proxyRes', function (proxyRes, req, res) {
			//console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
		});
		proxy.on('close', function (req, socket, head) {
			// view disconnected websocket connections
			//console.log('Client disconnected');
		});

		// We have to set the host of the request to the our remote server
		// It currently contains localhost... which leads to problems on some
		// servers
		request.headers.host = proxy_cfg.host;
		// cut the prefix from the beginning of the url
		// request.url = request.url.slice(request.url.indexOf("/", 1));
		request.url = request.url.slice(proxy_cfg.prefix.length);
		if(proxy_cfg.context) {
			request.url = proxy_cfg.context + request.url;
		}
		proxy.web(request, response, {
			// cause we use this script only during development and testing we
			// have a http connection. For https we have to do some additional
			// proxy configuration
			target: 'http://' + proxy_cfg.host + (proxy_cfg.port ? ':' + proxy_cfg.port : '') + '/'
		});
	} else {

		fs.exists(filename, function(exists) {
			if (!exists) {
				// if we find /mls_base/ in filename we look into a sibling of the current directory to find the file
				let idx = filename.indexOf("/mls_base/");
				if(idx > -1) {
					filename = filename.substring(0, idx);
					let lastIdx = filename.lastIndexOf("/");
					filename = filename.substring(0, lastIdx) + uri;
					if(!fs.existsSync(filename) ) {
						idx = filename.indexOf("-dbg");
						if(idx > -1) {
							filename = filename.substring(0, idx) + filename.substring(idx+4);
						}
					}
					//console.log("filename: " + filename);
				} else {
					response.writeHead(404, {
						"Content-Type": "text/plain"
					});
					response.write("404 Not Found\n" + filename);
					response.end();
					return;
				}
			}

			if (fs.statSync(filename).isDirectory()) filename += '/index.html';

			fs.readFile(filename, "binary", function(err, file) {
				if (err) {
					response.writeHead(500, {
						"Content-Type": "text/plain"
					});
					response.write(err + "\n");
					response.end();
					return;
				}

				response.writeHead(200);
				response.write(file, "binary");
				response.end();
			});
		});
	}
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
*/