<?php
require_once 'inc/include.php';
$webdav_url = "http://" . $_SERVER['HTTP_HOST'] . str_replace('?' . $_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']) . "webdav_server.php";
echo('<div style="float:right">Total size of stored attachments: ' . format_size(foldersize(getcwd() . '/' . $data_dir)) . '<br />WebDAV URL: <a href="' . $webdav_url . '">' . $webdav_url . '</a></div>');
