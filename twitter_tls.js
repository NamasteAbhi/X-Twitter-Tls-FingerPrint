// @NamasteHacker
// 10/08/2024

Java.perform(function() {
    let ResponseBody = Java.use("okhttp3.ResponseBody");
    let ByteArrayOutputStream = Java.use('java.io.ByteArrayOutputStream');
    let ByteArrayInputStream = Java.use('java.io.ByteArrayInputStream');
    let GZIPInputStream = Java.use('java.util.zip.GZIPInputStream');
    let InputStreamReader = Java.use('java.io.InputStreamReader');
    let BufferedReader = Java.use('java.io.BufferedReader');
    let StringBuilder = Java.use('java.lang.StringBuilder');
    let OkHttpClient = Java.use("okhttp3.OkHttpClient");
    let HttpUrl = Java.use("okhttp3.HttpUrl");
    OkHttpClient.newCall.overload("okhttp3.Request").implementation = function (request) {
        let url = request.url().toString();
    
        if (url ==='https://api.twitter.com/oauth2/token') {
            let newUrl ='https://tls.browserleaks.com/json';
            console.log(`Replacing URL with: ${newUrl}`);
            try {
                // Modify the request with the new URL
                let builder = request.newBuilder();
                let newHttpUrl = HttpUrl.parse(newUrl);
                builder.url(newHttpUrl);
                request = builder.build();
            } catch (e) {
            }
        }
    };
    ResponseBody["byteStream"].implementation = function () {
        let inputStream = this["byteStream"]();
        let byteArrayOutputStream = ByteArrayOutputStream.$new();
        let buffer = Java.array('byte', [1024]);  // Correctly initialize the buffer array
        let length;
        while ((length = inputStream.read(buffer, 0, buffer.length)) !== -1) {
            byteArrayOutputStream.write(buffer, 0, length);
        }
        let byteArray = byteArrayOutputStream.toByteArray();
                let plainString = "";
        for (let i = 0; i < byteArray.length; i++) {
        plainString += String.fromCharCode(byteArray[i]);
    }
        if (plainString.includes("ja3_hash")) {
            console.log(plainString);
        }
        let gzipInputStream = GZIPInputStream.$new(ByteArrayInputStream.$new(byteArray));
        let reader = BufferedReader.$new(InputStreamReader.$new(gzipInputStream));
        let sb = StringBuilder.$new();
        let line;
        while ((line = reader.readLine()) !== null) {
            sb.append(line);
            sb.append('\n');
        }
        return ByteArrayInputStream.$new(byteArray);
    };
});
