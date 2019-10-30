<?php
/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

namespace Vanilla\Web;

use Garden\SafeCurl\SafeCurl;

/*
 * SafeCurl wrapper.
 */
class CurlWrapper {
    /**
     * Executes a safecurl request.
     *
     * @param resource $ch The curl handle to execute.
     * @param bool $followLocation
     * @return string
     */
    public static function curlExec($ch, $followLocation = false): string {
        $safeCurl = new SafeCurl($ch);
        $safeCurl->setFollowLocation($followLocation);
        $curlInfo = curl_getinfo($ch);
        $url = $curlInfo['url'];
        $response = $safeCurl->execute($url);

        return $response;
    }
}
