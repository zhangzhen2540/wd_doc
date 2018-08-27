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
{
	"materialName": "abcdefg.txt",
	"localPath": "b01761814d004f4399c6784b8fe46044.txt",
	"materialType": "material.type.math"
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新增资料ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "2"
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
    "entity": "[1, 3, 4]"
}
*/




/**
* @api {post} /materialBank/get 公共资源详情
* @apiDescription 公共资源详情
* @apiName MaterialBankGet
* @apiGroup Admin
*
* @apiParam {Number} data 资源ID 
*
* @apiParamExample Param-Example:
data=2
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 资源详情
* @apiSuccess {Number} entity.id 资源ID
* @apiSuccess {String} entity.materialName 资源名
* @apiSuccess {String} entity.materialUrl 资源访问路径
* @apiSuccess {String} [entity.materialType] 资源类别code
* @apiSuccess {String} [entity.materialTypeDesc] 资源类别描述
* @apiSuccess {Number=0, 1} entity.status 资源状态
* @apiSuccess {Number} entity.fileSize 资源文件大小，单位byte
* @apiSuccess {String} entity.fileType 资源文件类型
* @apiSuccess {Number} entity.createTime 资源上传时间（时间戳） 
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "createTime": 1535391061000,
        "createUserId": 2,
        "fileSize": 59904,
        "fileType": "other",
        "id": 2,
        "localPath": "\\other\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
        "materialName": "abcdefg.txt",
        "materialType": "material.type.math",
        "materialTypeDesc": "高等数学",
        "materialUrl": "/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
        "status": 1,
        "updateTime": 1535391061000,
        "updateUserId": 2
    },
    "message": "\"SUCCESS\""
}
*/







/**
* @api {post} /materialBank/list 公共资源列表
* @apiDescription 公共资源列表
* @apiName MaterialBankList
* @apiGroup Admin
*
* @apiParam {String} [materialName] 资源名称(模糊匹配)
* @apiParam {String} [fileType] 文件类型 
*
* @apiParamExample Param-Example:
materialName=abc
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 资源详情列表
* @apiSuccess {Number} entity.id 资源ID
* @apiSuccess {String} entity.materialName 资源名
* @apiSuccess {String} entity.materialUrl 资源访问路径
* @apiSuccess {String} [entity.materialType] 资源类别code
* @apiSuccess {String} [entity.materialTypeDesc] 资源类别描述
* @apiSuccess {Number=0, 1} entity.status 资源状态
* @apiSuccess {Number} entity.fileSize 资源文件大小，单位byte
* @apiSuccess {String} entity.fileType 资源文件类型
* @apiSuccess {Number} entity.createTime 资源上传时间（时间戳） 
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": [
        {
            "createTime": 1535391061000,
            "createUserId": 2,
            "fileSize": 59904,
            "fileType": "other",
            "id": 2,
            "localPath": "\\other\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
            "materialName": "abcdefg.txt",
            "materialType": "material.type.math",
            "materialTypeDesc": "高等数学",
            "materialUrl": "/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
            "status": 1,
            "updateTime": 1535391061000,
            "updateUserId": 2
        }
    ],
    "message": "\"SUCCESS\""
}
*/






/**
* @api {post} /materialBank/list 公共资源列表
* @apiDescription 公共资源列表
* @apiName MaterialBankList
* @apiGroup Admin
*
* @apiParam {String} [materialName] 资源名称(模糊匹配)
* @apiParam {String} [fileType] 文件类型 
* @apiParam {Number} [pageIndex] 页码（默认0）
* @apiParam {Number} [pageSize] 页最大展示数量
*
* @apiParamExample Param-Example:
pageIndex=1&pageSize=20&materialName=abc
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 查询结果
* @apiSuccess {Number} [entity.total] 总结果数量
* @apiSuccess {Number} [entity.pageIndex] 页码
* @apiSuccess {Number} [entity.pageSize] 页最大展示数量
* @apiSuccess {Object} [entity.list] 资源列表
* @apiSuccess {Number} entity.list.id 资源ID
* @apiSuccess {String} entity.list.materialName 资源名
* @apiSuccess {String} entity.list.materialUrl 资源访问路径
* @apiSuccess {String} [entity.list.materialType] 资源类别code
* @apiSuccess {String} [entity.list.materialTypeDesc] 资源类别描述
* @apiSuccess {Number=0, 1} entity.list.status 资源状态
* @apiSuccess {Number} entity.list.fileSize 资源文件大小，单位byte
* @apiSuccess {String} entity.list.fileType 资源文件类型
* @apiSuccess {Number} entity.list.createTime 资源上传时间（时间戳） 
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "createTime": 1535391061000,
                "createUserId": 2,
                "fileSize": 59904,
                "fileType": "other",
                "id": 2,
                "localPath": "\\other\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
                "materialName": "abcdefg.txt",
                "materialType": "material.type.math",
                "materialUrl": "/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt",
                "status": 1,
                "updateTime": 1535391061000,
                "updateUserId": 2
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 1
    },
    "message": "\"SUCCESS\""
}
*/
