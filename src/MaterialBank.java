/**
* @api {post} /materialBank/add 公共资料添加
* @apiDescription 公共资料添加
* @apiName MaterialBankAdd
* @apiGroup Admin
*
* @apiParam {String} materialName 资料名称
* @apiParam {String} localPath 资料上传返回的临时路径
* @apiParam {String} [materialType] 资料归属类别（关联字典表code）
*
* @apiParamExample Param-Example:
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新增资料ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "1"
}
*/


/**
* @api {post} /materialBank/deletes 公共资料删除
* @apiDescription 公共资料删除
* @apiName MaterialBankDeletes
* @apiGroup Admin
*
* @apiParam {Number[]} ids 资料ID列表
*
* @apiParamExample Param-Example:
* [1, 3, 4]
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 删除资料ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "[1, 2]"
}
*/

