/**
* @api {post} /feedback/add 意见反馈添加
* @apiDescription 意见反馈添加
* @apiName FeedbackAdd
* @apiGroup User
*
* @apiParam {String} content 内容
* @apiParam {Number} replyId 回复反馈ID  
* @apiParam {Object[]} attachments 附件
* @apiParam {String} attachments.fileName 附件名
* @apiParam {String} attachments.fileLocalPath 附件路径 
*
* @apiParamExample Param-Example:
{
	"content": "I like green",
	"attachments": [
		{
			"fileName": "red.gif",
			"fileLocalPath": "d207d00f7b0246679c5ffe9e37d3f8d1.gif"
		},
		{
			"fileName": "yellow.gif",
			"fileLocalPath": "d207d00f7b0246679c5ffe9e37d3f8d1.gif"
		},
		{
			"fileName": "green.gif",
			"fileLocalPath": "d207d00f7b0246679c5ffe9e37d3f8d1.gif"
		}
	]
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新增ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "1"
}
*/



/**
* @api {post} /feedback/deletes 意见反馈删除
* @apiDescription 意见反馈删除
* @apiName FeedbackDelete
* @apiGroup User
*
* @apiParam {Number[]} id 意见反馈ID列表 
*
* @apiParamExample Param-Example:
[1, 3]
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 删除ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "[1, 3]"
}
*/




/**
* @api {post} /feedback/list 意见反馈列表
* @apiDescription 意见反馈列表
* @apiName FeedbackList
* @apiGroup User
*
* @apiParam {Number=0,1} replyStatus 是否有回复，1：是
* @apiParam {String} startTime 反馈起始时间
* @apiParam {String} endTime 反馈结束时间 
*
* @apiParamExample Param-Example:
replyStatus=1&startTime=2018-08-01%2010:01:01&endTime=2018-09-30%2012:01:01
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 反馈列表
* @apiSuccess {Number} entity.id ID
* @apiSuccess {Number} entity.replyId 回复意见ID（非回复为-1）
* @apiSuccess {Number} entity.replyStatus 是否有回复，1：是
* @apiSuccess {Number} entity.userId 反馈用户ID
* @apiSuccess {String} entity.userName 反馈用户名
* @apiSuccess {String} entity.content 反馈内容
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": [
        {
            "content": "Whice color is you like",
            "createTime": 1535553155000,
            "createUserId": 2,
            "deleteStatus": 1,
            "id": 6,
            "replyId": -1,
            "replyStatus": 1,
            "rootId": 6,
            "updateTime": 1535553664000,
            "updateUserId": 2,
            "userId": 2,
            "userName": "teacher"
        }
    ],
    "message": "\"SUCCESS\""
}
*/





/**
* @api {post} /feedback/list 意见反馈列表
* @apiDescription 意见反馈列表
* @apiName FeedbackList
* @apiGroup User
*
* @apiParam {Number=0,1} replyStatus 是否有回复，1：是
* @apiParam {String} startTime 反馈起始时间
* @apiParam {String} endTime 反馈结束时间 
* @apiParam {Number} pageIndex 页码
* @apiParam {Number} pageSize 页最大展示数量
*
* @apiParamExample Param-Example:
replyStatus=1&startTime=2018-08-01%2010:01:01&endTime=2018-09-30%2012:01:01
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.total 总结果数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Number} entity.pageSize 页最大展示数量
* @apiSuccess {Object[]} entity.list 反馈列表
* @apiSuccess {Number} entity.list.id ID
* @apiSuccess {Number} entity.list.replyId 回复意见ID（非回复为-1）
* @apiSuccess {Number} entity.list.replyStatus 是否有回复，1：是
* @apiSuccess {Number} entity.list.userId 反馈用户ID
* @apiSuccess {String} entity.list.userName 反馈用户名
* @apiSuccess {String} entity.list.content 反馈内容
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "content": "Whice color is you like",
                "createTime": 1535553155000,
                "createUserId": 2,
                "deleteStatus": 1,
                "id": 6,
                "replyId": -1,
                "replyStatus": 1,
                "rootId": 6,
                "updateTime": 1535553664000,
                "updateUserId": 2,
                "userId": 2,
                "userName": "teacher"
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 1
    },
    "message": "\"SUCCESS\""
}
*/






/**
* @api {post} /feedback/reply/query 意见反馈及回复查询
* @apiDescription  意见反馈及回复查询
* @apiName FeedbackReplyQuery
* @apiGroup User
*
* @apiParam {Number} rootId 根反馈ID
* @apiParam {Number} pageIndex 页码
* @apiParam {Number} pageSize 页最大展示数量
*
* @apiParamExample Param-Example:
rootId=6
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.total 总结果数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Number} entity.pageSize 页最大展示数量
* @apiSuccess {Object[]} entity.list 反馈列表
* @apiSuccess {Number} entity.list.id ID
* @apiSuccess {Number} entity.list.replyId 回复意见ID（非回复为-1）
* @apiSuccess {Number} entity.list.replyStatus 是否有回复，1：是
* @apiSuccess {Number} entity.list.userId 反馈用户ID
* @apiSuccess {String} entity.list.userName 反馈用户名
* @apiSuccess {String} entity.list.content 反馈内容
* @apiSuccess {Object[]} entity.list.attachments 附件
* @apiSuccess {String} entity.list.fileName 附件名
* @apiSuccess {String} entity.list.fileUrl	附件访问路径
* @apiSuccess {Number} entity.list.fileSize	附件大小
* @apiSuccess {String} entity.list.fileType 附件类型
* @apiSuccess {Number} entity.list.sort 附件排序
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "attachments": [
                    {
                        "createTime": 1535553155000,
                        "exerciseId": 6,
                        "exerciseType": 200,
                        "fileLocalPath": "\\image\\d207d00f7b0246679c5ffe9e37d3f8d1_1535524355162_yzMq.gif",
                        "fileName": "red.gif",
                        "fileSize": 2747952,
                        "fileType": "image",
                        "fileUrl": "/image/d207d00f7b0246679c5ffe9e37d3f8d1_1535524355162_yzMq.gif",
                        "id": 14,
                        "sort": 1
                    }
                ],
                "content": "Whice color is you like",
                "createTime": 1535553155000,
                "createUserId": 2,
                "deleteStatus": 1,
                "id": 6,
                "replyId": -1,
                "replyStatus": 1,
                "rootId": 6,
                "updateTime": 1535553664000,
                "updateUserId": 2,
                "userId": 2,
                "userName": "teacher"
            },
            {
                "content": "I like green",
                "createTime": 1535553201000,
                "createUserId": 2,
                "deleteStatus": 1,
                "id": 7,
                "replyId": 6,
                "replyStatus": 1,
                "rootId": 6,
                "updateTime": 1535553664000,
                "updateUserId": 2,
                "userId": 2,
                "userName": "teacher"
            },
            {
                "content": "Ok",
                "createTime": 1535553219000,
                "createUserId": 2,
                "deleteStatus": 1,
                "id": 8,
                "replyId": 7,
                "replyStatus": 0,
                "rootId": 6,
                "updateTime": 1535553664000,
                "updateUserId": 2,
                "userId": 2,
                "userName": "teacher"
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 3
    },
    "message": "\"SUCCESS\""
}
*/
