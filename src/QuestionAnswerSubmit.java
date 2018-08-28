/**
* @api {post} /questionAnswer/submit/edit 提交问题答案
* @apiDescription 提交问题答案
* @apiName QuestionAnswerSubmit
* @apiGroup Lesson
*
* @apiParam {Number} questionId 问题ID
* @apiParam {Number=1,2,3,4} questionType 问题类型,1: 选择题, 2: 判断题, 3: 填空题, 4: 简答题
* @apiParam {String} answerContent 答案
* @apiParam {Number=0,1} [isSubmit] 是否提交
* @apiParam {Object[]} [attachments] 附件列表
* @apiParam {String} attachments.fileName 附件名
* @apiParam {String} attachments.fileLocalPath 附件路径
*
* @apiParamExample 
{
	"questionId": 1,
	"questionType": 6,
	"answerContent": "",
	"isSubmit": 1,
	"attachments": [
	{
		"fileLocalPath": "877b33030f0248beb9c35fa59dad4a8d.txt",
		"fileName": "ans.txt"
	}
	]
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 答题记录ID
*
{
    "code": 200,
    "entity": "1"
}
*/
