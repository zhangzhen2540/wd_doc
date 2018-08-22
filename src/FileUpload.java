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
* @apiSuccess {Object} [entity] 文件对象
* @apiSuccess {String} entity.fileType 文件类型
* @apiSuccess {String} entity.fileTmpName 文件临时保存名
* @apiSuccess {String} entity.fileOriginName 文件原始名
*
*
* @apiSuccessExample Success-Example:
* {
*    "code": 200,
*    "entity": {
*        "fileOriginName": "teacherData.xls",
*        "fileTmpName": "680aeccaada049919057eecb6ffcb8c2_1534925455790.xls",
*        "fileType": "other"
*    },
*    "message": "\"SUCCESS\""
* }
*/
