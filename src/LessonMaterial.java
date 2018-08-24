


/**
* @api {post} /lessonMaterial/add 课时资料添加
* @apiDescription 课时资料添加
* @apiName lessonMaterialAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} materialName 资料名
* @apiParam {Number=1,2} fromWhere 资料来源，1：上传，2：资料库
* @apiParam {Number} [materialBankId] 资料库资料ID(资料来源自资料库时必填)
* @apiParam {String} localPath 资料路径（上传资料时必填）
* @apiParam {Number=0, 1}  [isShare] 是否共享，1：共享，0：不共享
* @apiParam {String} [materialDesc] 资料描述
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课时资料ID
*
*/


/**
* @api {post} /lessonMaterial/copyTo/edit 课件资料复制
* @apiDescription 复制课件资料到指定课时下
* @apiName LessonMaterialCopy
* @apiGroup Lesson
*
* @apiParam {Number} targetLessonId 复制目标课时ID
* @apiParam {Number[]} lessonMaterialIds 拷贝课件资料ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 复制目标课时ID
*
*/




/**
* @api {post} /lessonMaterial/deletes 课时资料删除
* @apiDescription 课时资料删除
* @apiName lessonMaterialDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} lessonMaterialId 删除课时资料ID列表
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课时资料ID列表
*
*/



/**
* @api {get} /lessonMaterial/list 课时资料列表查询
* @apiDescription 课时资料列表查询
* @apiName LessonMaterialList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {Number=0,1} [status] 资料状态
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 课时资料列表
* @apiSuccess {Number} entity.id 课时资料ID
* @apiSuccess {String} entity.materialName 课时资料名称
* @apiSuccess {String} [entity.materialDesc] 课时资料描述
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {String} entity.materialUrl 资料访问地址
* @apiSuccess {Number=0,1} entity.status 资料状态
* @apiSuccess {String} entity.fileType 资料文件类型
* @apiSuccess {Number} entity.fileSize 资料文件大小，单位byte
* @apiSuccess {Number=0,1} entity.isShare 是否共享资料 
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": [
        {
            "createTime": 1534949063000,
            "createUserId": 1,
            "fileSize": 19456,
            "fileType": "excel",
            "fromWhere": 1,
            "id": 1,
            "isShare": 0,
            "lessonId": 2,
            "localPath": "\\excel\\db73cc16-652e-46fb-a5da-2f5e0750fae3.xls",
            "materialDesc": "test excel",
            "materialName": "teacherData.xls",
            "materialUrl": "/excel/db73cc16-652e-46fb-a5da-2f5e0750fae3.xls",
            "sort": 1,
            "status": 1,
            "updateTime": 1534949063000,
            "updateUserId": 1
        }
    ],
    "message": "\"SUCCESS\""
}
*/

