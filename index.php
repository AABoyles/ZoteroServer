<html>
	<head>
		<title>Zotero Private Server</title>
		<link rel="stylesheet" href="inc/normalize.css" type="text/css" media="screen" charset="utf-8"/>
		<link rel="stylesheet" href="inc/tablesorter/css/theme.blue.css" type="text/css" media="screen" charset="utf-8">
		<link rel="stylesheet" href="inc/css.css" type="text/css" media="screen" charset="utf-8"/>
		<script type="text/javascript" src="inc/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="inc/tablesorter/js/jquery.tablesorter.min.js"></script>
		<script type="text/javascript" src="inc/jquery-ui.min.js"></script>
		<script type="text/javascript" src="inc/jquery.dragtable.js"></script>
	</head>
	<body>

		<?php
		require_once 'inc/include.php';
		$zotero = new phpZotero($API_key);
		$page = $_REQUEST['page'];
		if (!($page)) {
			$page = 1;
		}

		$orders[0] = $sortorder;
		if (strcmp($orders[0], "asc")) {
			$orders[1] = 'asc';
		} else {
			$orders[1] = 'desc';
		}

		//purge old files from the cache
		purge_cache(realpath("./" . $cache_dir), $cache_age);

		$i = 0;
		$item = array(0 => array(title => "", itemKey => "", creatorSummary => "", year => "", numChildren => ""));

		// get first set of items from API
		$start = ($page - 1) * $ipp;
		if ($ipp > $fetchlimit) {
			$limit = $fetchlimit;
		} else {
			$limit = $ipp;
		}
		$items = $zotero -> getItemsTop($user_ID, array(format => 'atom', content => 'none', start => $start, limit => $limit, order => $sort, sort => $sortorder));
		$totalitems = intval(substr($items, strpos($items, "<zapi:totalResults>") + 19, strpos($items, "</zapi:totalResults>") - strpos($items, "<zapi:totalResults>") - 19));

		echo '<h1><img src="imgs/zotero.png" /> Private Server</h1>
<table class="tablesorter" id="Documents">
	<thead>
		<tr>
			<th>Title</th>
			<th>Creator</th>
			<th>Year</th>
			<th>Attachments</th>
		</tr>
	</thead>
	<tbody>';
		while (($i < ($ipp - 1)) && (strpos($items, "<entry>") > 0)) {
			$offset = 0;
			$pos = strpos($items, "<entry>", $offset);
			while ($pos !== false) {
				$entry = substr($items, strpos($items, "<entry>", $offset), strpos($items, "</entry>", $offset) - strpos($items, "<entry>", $offset) + 8);
				$item_title = "";
				$item_itemKey = "";
				$item_creatorSummary = "";
				$item_year = "";
				$item_numChildren = "";
				if (strpos($entry, "<title>") > 0)
					$item_title = substr($entry, strpos($entry, "<title>") + 7, strpos($entry, "</title>") - strpos($entry, "<title>") - 7);
				if (strpos($entry, "<zapi:key>") > 0)
					$item_itemKey = substr($entry, strpos($entry, "<zapi:key>") + 10, strpos($entry, "</zapi:key>") - strpos($entry, "<zapi:key>") - 10);
				if (strpos($entry, "<zapi:creatorSummary>") > 0)
					$item_creatorSummary = substr($entry, strpos($entry, "<zapi:creatorSummary>") + 21, strpos($entry, "</zapi:creatorSummary>") - strpos($entry, "<zapi:creatorSummary>") - 21);
				if (strpos($entry, "<zapi:year>") > 0)
					$item_year = substr($entry, strpos($entry, "<zapi:year>") + 11, strpos($entry, "</zapi:year>") - strpos($entry, "<zapi:year>") - 11);
				if (strpos($entry, "<zapi:numChildren>") > 0)
					$item_numChildren = substr($entry, strpos($entry, "<zapi:numChildren>") + 18, strpos($entry, "</zapi:numChildren>") - strpos($entry, "<zapi:numChildren>") - 18);
				$item[$i] = array(title => $item_title, itemKey => $item_itemKey, creatorSummary => $item_creatorSummary, year => $item_year, numChildren => $item_numChildren);
				echo('<tr>');
				echo("<td><a href=\"details.php?itemkey=" . $item[$i]['itemKey'] . "\">" . $item[$i]['title'] . '</a></td>');
				echo('<td>' . $item[$i]['creatorSummary'] . '</td>');
				echo('<td>' . $item[$i]['year'] . '</td>');
				echo('<td>' . $item[$i]['numChildren'] . '</td>');
				echo("</tr>\n");
				$i = $i + 1;
				$offset = strpos($items, '</entry>', $offset) + 8;
				$pos = strpos($items, '<entry>', $offset);
			}
			$items = $zotero -> getItemsTop($user_ID, array(format => 'atom', content => 'none', start => ($start + $i), limit => $limit, order => $sort, sort => $sortorder));
		}
		echo("</tbody></table><br />\n\n");
		echo('<span id="pagecounter">' . ($start + 1) . " to " . ($start + $i) . " of " . $totalitems . '</span>');

		// NAVIGATION FOOTER
		echo("<table>\n");
		$parm_ipp = ($ipp == $def_ipp) ? "" : "&ipp=$ipp";
		$parm_sort = ($sort == $def_sort) ? "" : "&sort=$sort";
		$parm_sortorder = ($sortorder == $def_sortorder) ? "" : "&sortorder=$sortorder";
		$i = 1;
		echo("<tr><td>Pages</td><td>");
		$pages = intval($totalitems / $ipp) + 1;
		while ($i <= $pages) {
			if ($i != $page)
				echo("<a href=\"?page=$i" . $parm_ipp . $parm_sort . $parm_sortorder . "\">");
			echo("-$i-");
			if ($i != $page)
				echo("</a>");
			echo("&nbsp;&nbsp;&nbsp;");
			$i = $i + 1;
			if ($i > 5) {
				if ($i < ($page - 2)) {
					$i = $page - 2;
					echo(" . . . &nbsp;&nbsp;&nbsp;");
				}
			}
			if (($i > ($page + 2)) && ($i > 5)) {
				if ($i < ($pages - 4)) {
					$i = $pages - 4;
					echo(" . . . &nbsp;&nbsp;&nbsp;");
				}
			}
		}
		echo("</td></tr>\n<tr><td>Items&nbsp;per&nbsp;Page</td><td>");
		$ipp_list = array(1, 10, 20, 50, 100, 200, 500, 1000, 9999999);
		$i = 0;
		while ($i <= 7) {
			if ($ipp != $ipp_list[$i])
				echo("<a href=\"?page=$page&ipp=" . $ipp_list[$i] . $parm_sort . $parm_sortorder . "\">");
			echo("-$ipp_list[$i]-");
			if ($ipp != $ipp_list[$i])
				echo("</a>");
			echo("&nbsp;&nbsp;&nbsp;");
			$j = $i + 1;
			if (($ipp > $ipp_list[$i]) && ($ipp < $ipp_list[$j]))
				echo("-$ipp-&nbsp;&nbsp;&nbsp;");
			$i = $i + 1;
		}
		echo("</td></tr>\n<tr><td>Sort By</td><td>");
		$s_list = array("dateAdded", "title", "creator", "type", "date", "publisher", "publication", "journalAbbreviation", "language", "dateModified", "accessDate", "libraryCatalog", "callNumber", "rights", "addedBy", "numItems");
		$i = 0;
		while ($i <= 15) {
			if ($sort != $s_list[$i])
				echo("<a href=\"?page=$page" . $parm_ipp . "&sort=" . $s_list[$i] . $parm_sortorder . "\">");
			echo("-$s_list[$i]-");
			if ($sort != $s_list[$i])
				echo("</a>");
			echo("&nbsp;&nbsp;&nbsp;");
			$i = $i + 1;
		}
		echo("</td></tr>\n<tr><td>Sort Order</td><td>");
		$so_list = array("asc", "desc");
		$i = 0;
		while ($i <= 1) {
			if ($sortorder != $so_list[$i])
				echo("<a href=\"?page=$page" . $parm_ipp . $parm_sort . "&sortorder=" . $so_list[$i] . "\">");
			echo("-$so_list[$i]-");
			if ($sortorder != $so_list[$i])
				echo("</a>");
			echo("&nbsp;&nbsp;&nbsp;");
			$i = $i + 1;
		}
		?>
		</td>
		</tr>
		</tbody>
		<tfoot>
		</tfoot>
		</table>
		<?php
		$webdav_url = "http://" . $_SERVER['HTTP_HOST'] . str_replace('?' . $_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']) . "webdav_server.php/zotero/";
		echo('<h3>Total size of stored attachments: ' . format_size(foldersize(getcwd() . '/' . $data_dir)) . '<br />WebDAV URL: <a href="' . $webdav_url . '">' . $webdav_url . '</a></h3>');
		?>
		<script>
      $(document).ready(function() {
        var sorttable = $("table#Documents");
        sorttable.tablesorter();
        //sorttable.dragtable();
      });
		</script>
	</body>
</html>
