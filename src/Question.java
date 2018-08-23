/**
* @api {post} /choiceQuestion/add 选择题添加
* @apiDescription 选择题添加
* @apiName ChoiceQuestionAdd
* @apiGroup Lesson
*
* @apiParam {String} questionTitle 题目
* @apiParam {String} lessonId 课时ID
* @apiParam {Number=1,2} questionType 问题类型，1：单选、2：多选
* @apiParam {Number=0,1} [status] 状态
* @apiParam {String} analysis 分析
* @apiParam {Object[]} options 选项
* @apiParam {String} optionsl.answerCode 选项编号,A,B,C
* @apiParam {String} options.answerContent 答案内容
* @apiParam {Number=0,1} options.isCorrect 是否正确答案，1:是
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 问题ID
*
*/


/**
* @api {post} /choiceQuestion/modify 选择题修改
* @apiDescription 选择题修改
* @apiName ChoiceQuestionModify
* @apiGroup Lesson
*
* @apiParam {Number} id 问题ID
* @apiParam {String} questionTitle 题目
* @apiParam {String} lessonId 课时ID
* @apiParam {Number=1,2} questionType 问题类型，1：单选、2：多选
* @apiParam {Number=0,1} [status] 状态
* @apiParam {String} analysis 分析
* @apiParam {Object[]} options 选项
* @apiParam {String} optionsl.answerCode 选项编号,A,B,C
* @apiParam {String} options.answerContent 答案内容
* @apiParam {Number=0,1} options.isCorrect 是否正确答案，1:是
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 问题ID
*
*/


/**
* @api {post} /choiceQuestion/list 选择题列表
* @apiDescription 选择题列表
* @apiName ChoiceQuestionList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 问题
* @apiSuccess {Number} entity.id 问题ID
* @apiSuccess {String} entity.questionTitle 题目
* @apiSuccess {String} [entity.analysis] 分析
* @apiSuccess {String=1,2} entity.questionType 类型，1：单选，2：多选
* @apiSuccess {Number} entity.lessonId 所属课时ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": [
        {
            "createTime": 1535039056000,
            "createUserId": 1,
            "id": 2,
            "lessonId": 2,
            "questionTitle": "哪一位是开国皇帝?",
            "questionType": "1",
            "status": 1,
            "updateTime": 1535039056000,
            "updateUserId": 1
        }
    ],
    "message": "\"SUCCESS\""
}
*/


/**
* @api {post} /choiceQuestion/pageList 选择题分页
* @apiDescription 选择题分页
* @apiName ChoiceQuestionPageList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 响应结果
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Number} entity.pageSize 页最大结果数量
* @apiSuccess {Number} entity.total 总结果数量
* @apiSuccess {Object[]} entity.list 问题列表
* @apiSuccess {Number} entity.list.id 问题ID
* @apiSuccess {String} entity.list.questionTitle 题目
* @apiSuccess {String} [entity.list.analysis] 分析
* @apiSuccess {String=1,2} entity.list.questionType 类型，1：单选，2：多选
* @apiSuccess {Number} entity.list.lessonId 所属课时ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "createTime": 1535039056000,
                "createUserId": 1,
                "id": 2,
                "lessonId": 2,
                "questionTitle": "哪一位是开国皇帝?",
                "questionType": "1",
                "status": 1,
                "updateTime": 1535039056000,
                "updateUserId": 1
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
* @api {post} /choiceQuestion/get 选择题详情
* @apiDescription 选择题详情
* @apiName ChoiceQuestionGet
* @apiGroup Lesson
*
* @apiParam {Number} data 题目ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 问题
* @apiSuccess {Number} entity.id 问题ID
* @apiSuccess {String} entity.questionTitle 题目
* @apiSuccess {String} [entity.analysis] 分析
* @apiSuccess {String=1,2} entity.questionType 类型，1：单选，2：多选
* @apiSuccess {Number} entity.lessonId 所属课时ID
* @apiSuccess {Object[]} entity.options 问题选项
* @apiSuccess {String} entity.options.answerCode 选项编码
* @apiSuccess {String} entity.options.answerContent 选项内容
* @apiSuccess {Number=0,1} entity.options.isCorrect 是否正确答案，1：是
* @apiSuccess {Number} entity.options.sort 选项排序
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": {
        "createTime": 1535039056000,
        "createUserId": 1,
        "id": 2,
        "lessonId": 2,
        "options": [
            {
                "answerCode": "A",
                "answerContent": "汉武帝",
                "createTime": 1535039056000,
                "createUserId": 1,
                "id": 1,
                "isCorrect": 0,
                "questionId": 2,
                "sort": 1,
                "updateTime": 1535039056000,
                "updateUserId": 1
            },
            {
                "answerCode": "B",
                "answerContent": "秦始皇",
                "createTime": 1535039056000,
                "createUserId": 1,
                "id": 2,
                "isCorrect": 1,
                "questionId": 2,
                "sort": 2,
                "updateTime": 1535039056000,
                "updateUserId": 1
            }
        ],
        "questionTitle": "哪一位是开国皇帝?",
        "questionType": "1",
        "status": 1,
        "updateTime": 1535039056000,
        "updateUserId": 1
    },
    "message": "\"SUCCESS\""
}
*/
