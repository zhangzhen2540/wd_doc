/**
* @api {post} /file/upload FileUpload
* @apiDescription 文件上传（提供文件上传到临时路径中，共后续操作使用）
* @apiName FileUpload
* @apiGroup Common
*
* @apiParam {File} file 上传文件 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 文件保存名
*
* @apiSuccessExample Success-Example:
* {"code": 200, "entity": "F3323300.doc", "message": "success"}
*/
