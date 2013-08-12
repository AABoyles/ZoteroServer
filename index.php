<!DOCTYPE html>
<html>
	<head>
		<title>Zotero Private Server</title>
		<link rel="stylesheet" href="css/normalize.css" type="text/css" media="screen" charset="utf-8"/>
		<link rel="stylesheet" href="css/css.css" type="text/css" media="screen" charset="utf-8"/>
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	</head>
	<body>
		<header><?php
		include 'settings.php';
		if (!isset($header)){
			$header = '<img src="imgs/zotero.png" /> Private Server';
		}
		echo $header;
		?></header>
		<table id="Documents">
			<thead><tr>
				<th>Title</th>
				<th>Creator</th>
				<th>Year</th>
				<th>Attachments</th>
			</tr></thead>
			<tbody></tbody>
			<tfoot></tfoot>
		</table>
		<script type="text/javascript" src="js/base.js"></script>
	</body>
</html>
