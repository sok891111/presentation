import SimpleHTTPServer
import SocketServer

PORT = 8000

print "serving at port", PORT

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

httpd.serve_forever()