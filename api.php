<?php
require_once 'inc/include.php';
$zotero = new phpZotero($API_key);
$page = 1;
if (array_key_exists('page', $_REQUEST)) {
	$page = $_REQUEST['page'];
}
$sortorder = 'asc';
if(array_key_exists('sortorder', $_REQUEST)){
	$sortorder = $_REQUEST['sortorder'];
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
while (($i < ($ipp - 1)) && (strpos($items, "<entry>") > 0)) {
	$offset = 0;
	$pos = strpos($items, "<entry>", $offset);
	while ($pos !== false) {
		$entry = substr($items, strpos($items, "<entry>", $offset), strpos($items, "</entry>", $offset) - strpos($items, "<entry>", $offset) + 8);
		$item_title = "";
		$item_itemKey = "";
	}
}
