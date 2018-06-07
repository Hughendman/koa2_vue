var log4js = require('log4js');

var log_config = require('../config/log_config');

//加载配置文件
log4js.configure(log_config);

var logUtil = {};

var errorLogger = log4js.getLogger('errorLogger');
var resLogger = log4js.getLogger('resLogger');

//封装错误日志
logUtil.logError = function (ctx, error, resTime) {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime));
    }
};

//封装响应日志
logUtil.logResponse = function (ctx, resTime) {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime));
    }
};

//格式化响应日志
var formatRes = function (ctx, resTime) {
    var logText = {};

    //响应日志开始
    // logText += "\n" + "*************** response log start ***************" + "\n";

    //添加请求日志
    logText = formatReqLog(ctx.request, resTime);

    //响应状态码
    logText.response_status= ctx.status;

    //响应内容
    logText.response_body = JSON.stringify(ctx.body);

    //响应日志结束
    // logText += "*************** response log end ***************" + "\n";
    let data = [];
    for(var init in logText){
        data.push(logText[init]);
    }
    return data.join(" ");
    return data;

}

//格式化错误日志
var formatError = function (ctx, err, resTime) {
    var logText = new String();

    //错误信息开始
    logText += "\n" + "*************** error log start ***************" + "\n";

    //添加请求日志
    logText += formatReqLog(ctx.request, resTime);

    //错误名称
    logText += "err name: " + err.name + "\n";
    //错误信息
    logText += "err message: " + err.message + "\n";
    //错误详情
    logText += "err stack: " + err.stack + "\n";

    //错误信息结束
    logText += "*************** error log end ***************" + "\n";

    return logText;
};

//格式化请求日志
var formatReqLog = function (req, resTime) {

    var logText = {};

    var method = req.method;
    //访问方法
    logText.request_method = method;

    //请求原始地址
    logText.request_originalUrl= req.originalUrl;

    //客户端ip
    logText.request_client_ip= req.ip;

    //开始时间
    var startTime;
    //请求参数
    if (method === 'GET') {
        logText_request_query= JSON.stringify(req.query);
        // startTime = req.query.requestStartTime;
    } else {
        logText.request_body= JSON.stringify(req.body);
        // startTime = req.body.requestStartTime;
    }
    //服务器响应时间
    logText.response_time= resTime ;

    return logText;
}

module.exports = logUtil;