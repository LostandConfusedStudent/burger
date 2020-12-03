Running into problems deploying to Heroku
Got the application to work locally and and build was successful, but constantly run into application error when opening it through Heroku
Have to figure out why table does not exist

$ heroku logs --tail
2020-12-03T05:30:11.183188+00:00 app[web.1]: at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
2020-12-03T05:30:11.183188+00:00 app[web.1]: at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
2020-12-03T05:30:11.183189+00:00 app[web.1]: at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
2020-12-03T05:30:11.183189+00:00 app[web.1]: at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
2020-12-03T05:30:11.183189+00:00 app[web.1]: at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
2020-12-03T05:30:11.183190+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
2020-12-03T05:30:11.183190+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
2020-12-03T05:30:11.183191+00:00 app[web.1]: at Socket.emit (events.js:315:20)
2020-12-03T05:30:11.183191+00:00 app[web.1]: at addChunk (_stream_readable.js:295:12)
2020-12-03T05:30:11.183192+00:00 app[web.1]: --------------------
2020-12-03T05:30:11.183192+00:00 app[web.1]: at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
2020-12-03T05:30:11.183193+00:00 app[web.1]: at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
2020-12-03T05:30:11.183193+00:00 app[web.1]: at Object.selectAll (/app/config/orm.js:31:20)
2020-12-03T05:30:11.183194+00:00 app[web.1]: at Object.selectAll (/app/models/burger.js:5:13)
2020-12-03T05:30:11.183194+00:00 app[web.1]: at /app/controllers/burgers_controller.js:7:12
2020-12-03T05:30:11.183194+00:00 app[web.1]: at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
2020-12-03T05:30:11.183195+00:00 app[web.1]: at next (/app/node_modules/express/lib/router/route.js:137:13)
2020-12-03T05:30:11.183195+00:00 app[web.1]: at Route.dispatch (/app/node_modules/express/lib/router/route.js:112:3)
2020-12-03T05:30:11.183195+00:00 app[web.1]: at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
2020-12-03T05:30:11.183196+00:00 app[web.1]: at /app/node_modules/express/lib/router/index.js:281:22 {
2020-12-03T05:30:11.183196+00:00 app[web.1]: code: 'ER_NO_SUCH_TABLE',
2020-12-03T05:30:11.183197+00:00 app[web.1]: errno: 1146,
2020-12-03T05:30:11.183197+00:00 app[web.1]: sqlMessage: "Table 'yv487wqtqh7nfdhv.burgers' doesn't exist",
2020-12-03T05:30:11.183197+00:00 app[web.1]: sqlState: '42S02',
2020-12-03T05:30:11.183198+00:00 app[web.1]: index: 0,
2020-12-03T05:30:11.183198+00:00 app[web.1]: sql: 'SELECT * FROM burgers;'
2020-12-03T05:30:11.183198+00:00 app[web.1]: }
2020-12-03T05:30:11.188631+00:00 heroku[router]: at=error code=H13 desc="Connection closed without response" method=GET path="/" host=polar-mesa-96411.herokuapp.com request_id=be19c3dc-4009-42a5-af7d-6a47416250ac fwd="67.185.157.58" dyno=web.1 connect=1ms service=24ms status=503 bytes=0 protocol=https
2020-12-03T05:30:11.194099+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-12-03T05:30:11.194352+00:00 app[web.1]: npm ERR! errno 1
2020-12-03T05:30:11.196740+00:00 app[web.1]: npm ERR! burger@1.0.0 start: `node server.js`
2020-12-03T05:30:11.196837+00:00 app[web.1]: npm ERR! Exit status 1
2020-12-03T05:30:11.196950+00:00 app[web.1]: npm ERR!
2020-12-03T05:30:11.197037+00:00 app[web.1]: npm ERR! Failed at the burger@1.0.0 start script.
2020-12-03T05:30:11.197106+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-12-03T05:30:11.204915+00:00 app[web.1]:
2020-12-03T05:30:11.205072+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-12-03T05:30:11.205146+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-12-03T05_30_11_198Z-debug.log
2020-12-03T05:30:11.272922+00:00 heroku[web.1]: Process exited with status 1
2020-12-03T05:30:11.306915+00:00 heroku[web.1]: State changed from up to crashed
2020-12-03T05:40:12.000000+00:00 app[api]: Build started by user pfsun9999@msn.com
2020-12-03T05:40:27.000000+00:00 app[api]: Build succeeded
2020-12-03T05:40:27.051274+00:00 app[api]: Deploy fbfc6b1b by user pfsun9999@msn.com
2020-12-03T05:40:27.051274+00:00 app[api]: Release v14 created by user pfsun9999@msn.com
2020-12-03T05:40:27.441923+00:00 heroku[web.1]: State changed from crashed to starting
2020-12-03T05:40:29.984026+00:00 heroku[web.1]: Starting process with command `node server.js`
2020-12-03T05:40:32.607086+00:00 app[web.1]: Server listening on: http://localhost:10870
2020-12-03T05:40:33.074006+00:00 heroku[web.1]: State changed from starting to up
2020-12-03T05:40:34.967872+00:00 app[web.1]: /app/node_modules/mysql/lib/protocol/Parser.js:437
2020-12-03T05:40:34.967915+00:00 app[web.1]: throw err; // Rethrow non-MySQL errors
2020-12-03T05:40:34.967915+00:00 app[web.1]: ^
2020-12-03T05:40:34.967916+00:00 app[web.1]:
2020-12-03T05:40:34.967916+00:00 app[web.1]: Error: ER_NO_SUCH_TABLE: Table 'yv487wqtqh7nfdhv.burgers' doesn't exist
2020-12-03T05:40:34.967917+00:00 app[web.1]: at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
2020-12-03T05:40:34.967917+00:00 app[web.1]: at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
2020-12-03T05:40:34.967918+00:00 app[web.1]: at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
2020-12-03T05:40:34.967918+00:00 app[web.1]: at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
2020-12-03T05:40:34.967918+00:00 app[web.1]: at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
2020-12-03T05:40:34.967919+00:00 app[web.1]: at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
2020-12-03T05:40:34.967920+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
2020-12-03T05:40:34.967920+00:00 app[web.1]: at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
2020-12-03T05:40:34.967920+00:00 app[web.1]: at Socket.emit (events.js:315:20)
2020-12-03T05:40:34.967921+00:00 app[web.1]: at addChunk (_stream_readable.js:295:12)
2020-12-03T05:40:34.967921+00:00 app[web.1]: --------------------
2020-12-03T05:40:34.967921+00:00 app[web.1]: at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
2020-12-03T05:40:34.967922+00:00 app[web.1]: at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
2020-12-03T05:40:34.967922+00:00 app[web.1]: at Object.selectAll (/app/config/orm.js:31:20)
2020-12-03T05:40:34.967923+00:00 app[web.1]: at Object.selectAll (/app/models/burger.js:5:13)
2020-12-03T05:40:34.967923+00:00 app[web.1]: at /app/controllers/burgers_controller.js:7:12
2020-12-03T05:40:34.967923+00:00 app[web.1]: at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
2020-12-03T05:40:34.967923+00:00 app[web.1]: at next (/app/node_modules/express/lib/router/route.js:137:13)
2020-12-03T05:40:34.967924+00:00 app[web.1]: at Route.dispatch (/app/node_modules/express/lib/router/route.js:112:3)
2020-12-03T05:40:34.967924+00:00 app[web.1]: at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
2020-12-03T05:40:34.967924+00:00 app[web.1]: at /app/node_modules/express/lib/router/index.js:281:22 {
2020-12-03T05:40:34.967925+00:00 app[web.1]: code: 'ER_NO_SUCH_TABLE',
2020-12-03T05:40:34.967925+00:00 app[web.1]: errno: 1146,
2020-12-03T05:40:34.967925+00:00 app[web.1]: sqlMessage: "Table 'yv487wqtqh7nfdhv.burgers' doesn't exist",
2020-12-03T05:40:34.967926+00:00 app[web.1]: sqlState: '42S02',
2020-12-03T05:40:34.967926+00:00 app[web.1]: index: 0,
2020-12-03T05:40:34.967926+00:00 app[web.1]: sql: 'SELECT * FROM burgers;'
2020-12-03T05:40:34.967927+00:00 app[web.1]: }
2020-12-03T05:40:34.984466+00:00 heroku[router]: at=error code=H13 desc="Connection closed without response" method=GET path="/" host=polar-mesa-96411.herokuapp.com request_id=d1f85a68-0d2b-4c9d-8568-ccff0e402d12 fwd="67.185.157.58" dyno=web.1 connect=0ms service=42ms status=503 bytes=0 protocol=https
2020-12-03T05:40:35.055684+00:00 heroku[web.1]: Process exited with status 1
2020-12-03T05:40:35.109714+00:00 heroku[web.1]: State changed from up to crashed
2020-12-03T05:40:35.112656+00:00 heroku[web.1]: State changed from crashed to starting
2020-12-03T05:40:37.736251+00:00 heroku[web.1]: Starting process with command `node server.js`
2020-12-03T05:40:41.441586+00:00 app[web.1]: Server listening on: http://localhost:43436
2020-12-03T05:40:42.058316+00:00 heroku[web.1]: State changed from starting to up
2020-12-03T05:47:22.707396+00:00 heroku[web.1]: Relocating dyno to a new server
2020-12-03T05:47:22.712964+00:00 heroku[web.1]: State changed from up to down
2020-12-03T05:48:09.497523+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2020-12-03T05:48:11.470624+00:00 heroku[web.1]: Process exited with status 143
2020-12-03T13:06:24.000000+00:00 app[api]: Build started by user pfsun9999@msn.com
2020-12-03T13:06:40.626067+00:00 app[api]: Release v15 created by user pfsun9999@msn.com
2020-12-03T13:06:40.626067+00:00 app[api]: Deploy 8c456a46 by user pfsun9999@msn.com
2020-12-03T13:06:40.801520+00:00 heroku[web.1]: State changed from down to starting
2020-12-03T13:06:41.000000+00:00 app[api]: Build succeeded
2020-12-03T13:06:43.370714+00:00 heroku[web.1]: Starting process with command `node server.js`
2020-12-03T13:06:45.962448+00:00 app[web.1]: Server listening on: http://localhost:47936
2020-12-03T13:06:46.261258+00:00 heroku[web.1]: State changed from starting to up

