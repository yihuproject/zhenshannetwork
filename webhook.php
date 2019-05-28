<?php

$cmd = "cd /data/wwwroot/CompanyOfficialWebsite &&sudo git pull";
$res = shell_exec($cmd);
if($res)
{
    echo "success";
}else{
    echo "error";
}
exit;