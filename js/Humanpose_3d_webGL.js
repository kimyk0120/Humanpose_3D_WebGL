let webglBrowserCheck = function(){
    if ( WEBGL.isWebGLAvailable() ) {
        console.log('이 브라우저는 WEBGL을 지원합니다.');
        return true;
    } else {
        console.log('이 브라우저는 WEBGL을 지원하지 않습니다.');
        return false;
    }
};

