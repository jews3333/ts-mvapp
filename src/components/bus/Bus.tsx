import React from 'react';

function Bus(){

    const xhr = new XMLHttpRequest();
    const url = 'http://61.43.246.153/openapi-data/service/busanBIMS2/busStop';
    const key = 'w0B3hH8sY%2FfexH7Q4ycGckGcFw9BXdZcWkYJXBDdjPo6%2FPOgzrFeH5JdxoO0ipG2Om%2BL0iM9e8T1X%2Bes7oisNQ%3D%3D';

    let query = '?' + encodeURIComponent('ServiceKey') + '=' + key;
    query += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    query += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    query += '&' + encodeURIComponent('bstopnm') + '=' + encodeURIComponent('부산시청');
    query += '&' + encodeURIComponent('arsno') + '=' + encodeURIComponent('13045');

    xhr.open('GET', url + query);

    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
        }
    };
    xhr.send('');

    return (
        <div></div>
    );
}

export default Bus;