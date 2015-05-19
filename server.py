<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0614213f5e5a8df33f957aef083ad81cfafbd58b
import SimpleHTTPServer
import SocketServer

PORT = 8000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
<<<<<<< HEAD
=======
=======
import SimpleHTTPServer
import SocketServer

PORT = 8000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
>>>>>>> 93d864a17e844a9c33a32f9e94824c2f34a8e66e
>>>>>>> 0614213f5e5a8df33f957aef083ad81cfafbd58b
httpd.serve_forever()